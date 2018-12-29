import { Component, OnInit, Pipe } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { PagingService } from '../services/paging.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


@Pipe({
  name:"default"
  })

export class CategoriesComponent implements OnInit {

  categories;

  categoriesPerPage:any[];
  loading:boolean = false;
  constructor(private router: Router, private route: ActivatedRoute,
     private dialogRef: MatDialogRef<HeaderComponent>,
     private categoryService: CategoryService, private pagingService: PagingService) { }


  ngOnInit() {
    this.loading = true;
    this.router.onSameUrlNavigation = "ignore";
    console.log("onInit fired");

    this.dialogRef.afterOpened()
      .subscribe(()=> this.pagingService.reset());

    this.categoryService.getItems().subscribe( (res:any) => {

      this.categories = res.categories;
      console.log(this.categories);
      this.getCategories();
      this.loading = false;
    });
  }

  hasMore(){
    return this.pagingService.hasMoreItems;
  }

  getCategories(){
    console.log("getting categories");
    console.log(this.pagingService.hasMoreItems);
    if(!this.pagingService.hasMoreItems){
      // this.pagingService.reset();
      this.dialogRef.close();

      // this.categoriesPerPage = this.pagingService.getitemsPerPage(20,this.categories);
    }else
    this.categoriesPerPage = this.pagingService.getitemsPerPage(20,this.categories);
  }

  getVideoByCategory(category:string){
    console.log(category);
    this.router.navigate(['/videos',category])
    console.log(this.router.navigated);
    console.log("navigated"+ category);
    this.close();

  }

  close(){
    this.dialogRef.close();
  }

}
