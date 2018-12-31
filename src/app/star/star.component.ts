import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() star;
  currentRate = 3;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  getStar(){
    this.router.navigate(['/videos',{stars:this.star.star_name}]);
  }

}
