import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagsService extends DataService {

  constructor(http: HttpClient) {
    super(http,"http://www.pornhub.com/webmasters/tags")
   }
}
