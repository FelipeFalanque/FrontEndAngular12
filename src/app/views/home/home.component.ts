import { UserHelper } from './../../helpers/user-helper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _userHelper: UserHelper) { }

  ngOnInit(): void {

    console.log(this._userHelper.getCurrentUser());

  }

}
