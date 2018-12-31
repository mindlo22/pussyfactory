import { LIST_TITLE } from './../app.module';
import { Injectable, Inject } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../utils/app-error';
import { NotFoundError } from '../utils/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlParams:any;
  page: string;
  private readonly originalUrl;

  constructor(private http: HttpClient,@Inject(LIST_TITLE) private url: string) {
      this.originalUrl = this.url;
   }

  getItems(){
    this.addPage();
    return this.http.get(this.url)
        .pipe(retry(3),catchError(this.handleError));
  }

  private addPage(){
    if(this.page != null){
        this.url = this.originalUrl+this.page;
    }
  }

  getById(id:any){
    this.urlParams = {params: new HttpParams().append('id',id)};
    this.addPage();
    return this.http.get(this.url,this.urlParams)
    .pipe(catchError(this.handleError));
  }

  getByParams(params){
    this.addPage();
    return this.http.get(this.url,{params})
    .pipe(catchError(this.handleError));
  }

  setPage(page: string){
    this.page = page;
  }

  private handleError(error:Response){
    if(error.status === 404)
        return throwError(new NotFoundError());

      return throwError(new AppError(error));
  }
}

