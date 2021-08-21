import { User } from './../../models/user';
import { UserHelper } from './../../helpers/user-helper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _userHelper: UserHelper) { }

  navbarShow = false;
  userCorrent: User = new User();

  ngOnInit(): void {

    this.userCorrent = this._userHelper.getCurrentUser();

  }

}
