import { Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { StarService } from './star.service';
import { TagsService } from './tags.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  categories: [];
  stars: [];
  tags: [];
  constructor(private categoryService:CategoryService,
     private starService:StarService,
      private tagService:TagsService) { }

  searchInStar(){
    return this.starService.get();
  }
  searchInCategory(){
    return this.categoryService.get();
  }
  searchInTags(){
    return this.tagService.get();
  }

}
