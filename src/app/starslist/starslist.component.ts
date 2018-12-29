import { Component, OnInit } from '@angular/core';
import { StarService } from '../services/star.service';
import { PagingService } from '../services/paging.service';
import { star } from '../models/star';
import { MatSnackBar } from '@angular/material';
import { NotFoundError } from '../utils/not-found-error';


@Component({
  selector: 'app-starslist',
  templateUrl: './starslist.component.html',
  styleUrls: ['./starslist.component.css']
})
export class StarslistComponent implements OnInit {

  stars: star[];
  starsPerPage:any[];
  loading:boolean = false;

  constructor(private starService:StarService,
    private msgBox: MatSnackBar,private pagingService:PagingService) {

   }

  ngOnInit() {
    this.loading = true;
    this.starService.getItems()
      .subscribe((res:any) => {
        this.stars =
        Array.from(res.stars).map((r:any) => r.star)
        .filter(s => s.gender === "female");
        console.log("star: ");
        console.log(this.stars);
        this.starsPerPage = this.pagingService.getitemsPerPage(20,this.stars);
        this.loading = false;
      },
      (error:Response) => {
        if(error instanceof NotFoundError){
          this.msgBox.open("file requested does not exist","alert");
        }else{
          this.loading = false;
          throw error;
        }
      });
  }

  nextStars(){
    this.starsPerPage = this.pagingService.getitemsPerPage(20,this.stars);
    scrollY = 0;
  }
  previousStars(){
    if(this.pagingService.pageCount != 0){
      this.starsPerPage = this.pagingService.getitemsPerPage(20,this.stars);
      this.pagingService.pageCount--;
    }
  }
}


