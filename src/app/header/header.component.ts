import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesComponent } from '../categories/categories.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Pussy Factory';

  term:string;

  constructor(public dialog: MatDialog, private router:Router,
     ) {}

  ngOnInit() {
  }

  openCatPage(){
    let dialogRef = this.dialog.open(CategoriesComponent,
      {maxHeight: '600px',
      width: '60%'});
  }
  search(){
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(['/videos',{search:this.term}]);
  }
}
