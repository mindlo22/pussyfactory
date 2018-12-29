import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarService extends DataService {

  constructor(http: HttpClient) {
    super(http,"http://www.pornhub.com/webmasters/stars_detailed");
   }
}
