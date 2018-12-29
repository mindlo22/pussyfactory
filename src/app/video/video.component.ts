import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, OnDestroy {

  @Input() video;

  thumb_url;
  counter = 0;
  currentRate = 0;
  private  subscription:Subscription;

  constructor() {
   }

  ngOnInit() {
    this.thumb_url = this.video.default_thumb
    this.currentRate = this.video.rating / 100 * 5;
  }

  changeThumb(){
   //emit value in sequence every 1 second
    const source = interval(1000);

    this.subscription = source.subscribe(() => {
      if(this.counter == this.video.thumbs.length){
        this.counter = 1;
      }
      this.thumb_url = this.video.thumbs[this.counter].src
      this.counter++;
    });

  }

  changeImage(){
    this.thumb_url = this.video.thumbs[this.counter++].src
  }

  stopThumbChange(){
    if(this.subscription != null && !this.subscription.closed)
      this.subscription.unsubscribe();
      this.thumb_url = this.video.thumbs[0].src
  }

  stop(b){
    b.unsubscribe();
    b.close();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.stopThumbChange();
    console.log("unsubscribed")
  }
}
