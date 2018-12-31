import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { TagsService } from '../services/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags;
  constructor(private tagsService: TagsService) { }

  ngOnInit() {
   this.tagsService.getItems().subscribe(
      (res:any) => this.tags = res.tags
    );
  }



}
