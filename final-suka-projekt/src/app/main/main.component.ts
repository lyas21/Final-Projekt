import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public totalPrice : number = 0;
  public amount : number = 0;

  constructor() { }

  ngOnInit() {
  }

}
