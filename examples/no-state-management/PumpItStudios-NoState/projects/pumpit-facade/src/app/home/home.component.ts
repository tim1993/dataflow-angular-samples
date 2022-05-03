import { Component, OnInit } from '@angular/core';
import { changeDectionStrategy } from '../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
