import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Hero Dashboard';
  subTitle = 'Rent a Hero';
  isAuth: boolean;
  arrived: string;

  budget = '7000000000';

  heroes = [{
    name: 'Captain Marvel',
    rent: '2000000000'
  }, 
  {
    name: 'Spiderman',
    rent: 100000
  }, 
  {
    name: 'Black Panther',
    rent: '1000000000'
  }, 
  {
    name: 'Thor',
    rent: '2000000000'
  }];

  constructor() { }

  ngOnInit(): void {
    this.isAuth = true;
  }

  hasArrived(event: string) {
    this.arrived = event;
  }
}
