import { Component, Input, OnInit } from '@angular/core';
import { changeDectionStrategy } from 'src/app/app.config';
import { IUser } from '../models/user.model';

@Component({
  selector: 'pumpit-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: changeDectionStrategy,
})
export class ProfileComponent implements OnInit {
  @Input() public user?: IUser;
  public get firstLetter() {
    return this.user?.username?.charAt(0)?.toUpperCase();
  }
  constructor() {}

  ngOnInit(): void {}
}
