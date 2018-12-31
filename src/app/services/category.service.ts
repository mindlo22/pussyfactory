import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends DataService{

  category = new BehaviorSubject('latina');
  categoryBroadcast = this.category.asObservable();

  constructor(http:HttpClient) {
    super(http,"https://www.pornhub.com/webmasters/categories");
   }

  changeCategory(category){
    this.category.next(category);
  }
}
