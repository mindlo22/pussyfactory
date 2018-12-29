import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {

  pagingItems: any[];
  remainingItems: any[];
  pageCount: number = 1;
  length:number;
  hasMoreItems: boolean = true;
  constructor() { }

  getitemsPerPage(itemsPerPage: number, items: any[]):any[]{
    this.pagingItems = [];
    this.length = itemsPerPage * this.pageCount;

    if(itemsPerPage < 0){
      throw "parameter should be greater than 0";
    }


    console.log("pageCount="+this.pageCount);
    console.log("length="+this.length);

    for (let index = this.length - itemsPerPage; index < this.length; index++) {
      this.pagingItems.push(items[index]);
      console.log("index: "+ index+" items: "+items[index]);
      console.log(items[index]);
    }

    if((items.length - this.length) < itemsPerPage){
      this.hasMoreItems = false;

      // console.log("the remainder ="+(items.length - this.length));
      // for(let i = this.length -1; i < items.length; i++){
      //   this.pagingItems.push(items[i]);
      // }
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
    console.log(this.pagingItems+" length is: "+this.length);
    console.log(this.pagingItems.length);

    return this.pagingItems;
  }

  reset(){
    this.length = 0;
    this.pageCount = 1;
    this.pagingItems = [];
  }
}

