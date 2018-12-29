import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AppErrorHandler implements ErrorHandler{

  constructor(public msgBox: MatSnackBar){}

  handleError(error: any){
    this.msgBox.open("an unexpected error occurred","alert",{duration: 2000});
    console.log(error);
  }
}
