import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesComponent } from '../categories/categories.component';
import { DialogService } from '../services/dialog.service';
import { SearchService } from '../services/search.service';
import { element } from '@angular/core/src/render3';
import { VideoService } from '../services/video.service';
import { UrlParams } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Pussy Factory';
  categories: category[];
  stars: {star}[];
  tags: [];
  starSearch: string[];
  categorySearch;

  constructor(public dialog: MatDialog, private router:Router,
     private searchService:SearchService,private videoService: VideoService) {
      this.searchService.searchInStar()
      .subscribe((res:any) => this.stars = res.stars);

      this.starSearch = [];
     }

  ngOnInit() {
    this.searchService.searchInCategory()
    .subscribe((res:any) => this.categories = res.categories);



    this.searchService.searchInTags()
    .subscribe((res:any) => this.tags = res.tags);
  }

  openCatPage(){
    // this.dialogService.openDialog();
    let dialogRef = this.dialog.open(CategoriesComponent,{maxHeight: '600px',
    width: '60%'});
  }

  search(term:string){
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(['/videos',{search:term}]);
  }

}

export interface category{
  id:number;
  category:string;
}
export interface star{
  star_name:string;
  star_thumb:string;
  gender:string;
  videos_count_all:number
  star_url:string;
}
