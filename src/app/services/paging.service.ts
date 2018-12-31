import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {

  pagingItems: any[];
  remainingItems: any[];
  pageCount: number;
  length:number;
  hasMoreItems: boolean = true;
  constructor() { }

  getitemsPerPage(itemsPerPage: number, items: any[]):any[]{
    if(isNaN(this.pageCount))
      this.pageCount = 1;

    this.pagingItems = [];
    this.length = itemsPerPage * this.pageCount;

    if(itemsPerPage < 0){
      throw "parameter should be greater than 0";
    }

    for (let index = this.length - itemsPerPage; index < this.length; index++) {
      this.pagingItems.push(items[index]);
    }

    if((items.length - this.length) < itemsPerPage){
      this.hasMoreItems = false;

      this.remainingItems = [];
      let i  = this.length -1;
      while(i < items.length){
        this.remainingItems.push(items[i]);
        i++;
      }

      return this.remainingItems;
    }

    if(this.length > items.length){
      this.hasMoreItems = false;
      return null;
    }

    this.pageCount++;

    return this.pagingItems;
  }

  reset(){
    this.length = 0;
    this.pageCount = 1;
    this.pagingItems = [];
  }

  public setPageCount(page){
    this.pageCount = page;
  }
}

