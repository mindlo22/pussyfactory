import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService extends DataService {

  constructor(http:HttpClient) {
    super(http,"http://www.pornhub.com/webmasters/");
  }

  getVideoByCategory(cat,page){

    let param = {params: new HttpParams()
      .set('category',cat)
      .set("page",page).set('ordering','mostviewed')
      .set('period','weekly')
    }


    return this.getByParams(param);
  }

  searchVideo(term:string){

  }

}
