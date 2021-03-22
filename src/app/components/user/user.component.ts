import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-user',
  templateUrl:'user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users;
  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json())
      .subscribe(res => this.users = res)
  }

  ngOnInit(): void {
  }

}
