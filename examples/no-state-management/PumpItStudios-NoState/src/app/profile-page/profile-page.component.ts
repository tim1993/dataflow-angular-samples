import { Component, OnInit } from '@angular/core';
import { changeDectionStrategy } from '../app.config';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: changeDectionStrategy,
})
export class ProfilePageComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}
}
