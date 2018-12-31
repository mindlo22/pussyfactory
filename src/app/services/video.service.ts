import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService extends DataService {

  constructor(http:HttpClient) {
    super(http,"https://www.pornhub.com/webmasters/");
  }

}
