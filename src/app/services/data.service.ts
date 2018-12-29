import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../utils/app-error';
import { NotFoundError } from '../utils/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlParams = {params: new HttpParams().set('id','1')}
  page: string;
  private readonly originalUrl;
  constructor(private http: HttpClient,private url: string) {
      this.originalUrl = this.url;
      this.urlParams =null;
   }

  get(){
    if(this.urlParams != null){
      this.addPage();
      return this.http.get(this.url,this.urlParams)
      .pipe(catchError(this.handleError));
    }
    else{
      this.addPage();
      return this.http.get(this.url)
        .pipe(retry(3),catchError(this.handleError));
    }
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

  getById(id){

    this.urlParams = {params: new HttpParams().set('id',id)}
    this.addPage();
    return this.http.get(this.url, this.urlParams)
    .pipe(catchError(this.handleError));
  }

  getByParams(params){
    this.addPage();
    return this.http.get(this.url,{params})
    .pipe(catchError(this.handleError));
  }

  public setParams(url_params: UrlParams []){
    let params = new HttpParams();
    this.urlParams = null;
    url_params.forEach(element => {
      params
        .set(element.id, element.name);
      // this.urlParams = {
      //   params: new HttpParams()
      //   .append(element.id, element.name)
      // };
    });
    this.urlParams = {params};
    console.log(params)
    console.log(this.urlParams.params)
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

export class UrlParams{
  id: string;
  name: any;
}
