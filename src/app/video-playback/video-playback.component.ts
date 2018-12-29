import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoService } from '../services/video.service';
import { NotFoundError } from '../utils/not-found-error';

@Component({
  selector: 'app-video-playback',
  templateUrl: './video-playback.component.html',
  styleUrls: ['./video-playback.component.css']
})
export class VideoPlaybackComponent implements OnInit {

  id: number;
  video;
  embed_url: string[];
  url;
  constructor(private videoPayload: VideoService, private msgBox: MatSnackBar,
    private route: ActivatedRoute,private san: DomSanitizer) { }


    ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.video = this.route
    .data.subscribe(data => {
      this.video = data['video'].video;

      console.log(this.video);
      let s: string =  data['embed'].embed.code;
      this.embed_url = s.split("&quot;", 2);
    },
    (error:Response) => {
      if(error instanceof NotFoundError){
        console.log("file requested does not exist");
      }else{
        throw error;
      }
    });

    this.getVideo();
    this.url = this.getUrl();

    console.log("onInit fired");
  }

  getVideo(){
    this.video = this.route.snapshot.data['video'].video;
    console.log(this.video);
  }

  getUrl(){
    return this.san.bypassSecurityTrustResourceUrl(this.embed_url[1]);
  }
}
