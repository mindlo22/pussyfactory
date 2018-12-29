import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HeaderComponent } from '../header/header.component';
import { CategoriesComponent } from '../categories/categories.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  public openDialog(){
    this.matDialog.open(CategoriesComponent);
  }
}
