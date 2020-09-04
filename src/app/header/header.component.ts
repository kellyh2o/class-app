import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  // This is the kind of component that expects to receive some kind of input

  @Input() title: string;
  @Input() subTitle: string;
  @Input() isAuth: boolean;

  @Output() arrived: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  // Lifecyle hook that initializes the component
  ngOnInit(): void {
    this.arrived.emit("You have arrived...");
  }
}
