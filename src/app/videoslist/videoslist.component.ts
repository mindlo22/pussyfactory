import { category } from './../header/header.component';
import { AppError } from './../utils/app-error';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { VideoService } from '../services/video.service';
import { CategoryService } from '../services/category.service';
import { MatSnackBar } from '@angular/material';
import { NotFoundError } from '../utils/not-found-error';

@Component({
  selector: 'app-videoslist',
  templateUrl: './videoslist.component.html',
  styleUrls: ['./videoslist.component.css']
})
export class VideoslistComponent implements OnInit {

  private p_videos;
  private category;
  private page = 1;
  private search_term;
  private star;
  loading: boolean = false;
  rating = 3;

  constructor(private videoService: VideoService, private msgBox: MatSnackBar,
     private route: ActivatedRoute, private router:Router,
      private categoryService:CategoryService){
        router.events.subscribe((routerEvent:any) => {
          this.checkRouterEvent(routerEvent);
        });
        router.onSameUrlNavigation = "reload";
      }

  ngOnInit() {
    this.videoService.setPage('search/');


    this.route.params.subscribe(p =>{
      this.category = this.route.snapshot.params['category'];
      this.search_term = this.route.snapshot.params['search'];
      this.star = this.route.snapshot.params['stars'];
      // this.getVideos();
    },
    (error:Response) => {
      if(error instanceof NotFoundError){
        console.log("params not set");
      }else{
        throw error;
      }
    });

    this.getVideos();

  }

  getVideosByCategory(){
    let p = {'category':this.category,
    "page":this.page,
    'ordering':'mostviewed',
    'period':'weekly'
    }

    this.videoService.getByParams(p)
      .subscribe((res:any) => {this.p_videos = res.videos;console.log(res)},
      (error:Response) => {
        if(error instanceof NotFoundError)
          this.msgBox.open("file requested does not exist","alert");

        else throw error;
      });
  }

  getVideosByStars(){
    let p = {'stars[]':[this.star],
    "search": this.star,
    "page":this.page,
    'ordering':'mostviewed'
    }

    this.videoService.getByParams(p)
      .subscribe((res:any) => {this.p_videos = res.videos;console.log(this.p_videos)},
      (error:Response) => {
        if(error instanceof NotFoundError)
          this.msgBox.open("file requested does not exist","alert");

        else throw error;
      });
  }

  getVideosBySearchTerm(){
    // this.videoService.setParams([{id:'search',name:this.search_term}]);
      let p = {'search':this.search_term,
      "page":this.page,
      'ordering':'mostviewed'
      }

      this.videoService.getByParams(p).subscribe((res:any) => {
      this.p_videos = res.videos;
      console.log(res);
    },
      (error:Response) => {
      if(error instanceof NotFoundError)
        this.msgBox.open("file requested does not exist","alert")

      else throw error;
    });
  }

  getVideosByTag(){}

  getRecentVideos(){

    let params =
      {'ordering':'newest',
      'period':'weekly',
      'page':this.page,
      'segment':'straight'
      }

    this.videoService.getByParams(params)
      .subscribe(
        (res:any) => {this.p_videos = res.videos},
        (error:AppError) => {
          if(error instanceof NotFoundError)
          this.msgBox.open("request not found","alert");

          else throw error;
        }
      );
  }

  getVideos(){

    console.log(this.category);
    console.log(this.star);
    console.log(this.search_term);
    this.videoService.setPage('search/');

    window.scrollTo(0, 0);
    if(this.category != null){
      this.getVideosByCategory();
      console.log("getting by categories...");
    }
    else if(this.search_term != null){
      this.getVideosBySearchTerm();
      console.log("getting video by search term...");
    }else if(this.star != null){
      this.getVideosByStars();
      console.log("getting video by star...");
    }else {
      this.getRecentVideos();
      console.log("getting recent videos...")
    }
  }


  checkRouterEvent(routerEvent: Event){
      if(routerEvent instanceof NavigationStart){
        this.loading = true;
      }

      if(routerEvent instanceof NavigationEnd
        || routerEvent instanceof NavigationError
        || routerEvent instanceof NavigationCancel){

          this.loading = false;
          this.getVideos();
        }
  }

  getNextPage(){
    this.page++;
    this.getVideos();
  }

  getPreviousPage(){
    if(this.page > 1){
      this.page--;
      this.getVideos();
    }

  }
}
