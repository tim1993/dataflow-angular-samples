import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';

@Component({
  selector: 'pumpit-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() currentUser?: IUser;

  constructor() {}

  ngOnInit(): void {}
}
