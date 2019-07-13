import { Component, OnInit } from '@angular/core';
import { NotFoundLabels } from './constants/notfound.labels';
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html'
})
export class NotfoundComponent implements OnInit {
  labels = NotFoundLabels;
  constructor() { }

  ngOnInit() {
  }

}
