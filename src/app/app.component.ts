import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template : `
  <app-header></app-header>
  <div class="content"><span>ExeterFullStackExcercise app is running!</span> </div>
  <nav>
  <ul>
    <li><a routerLink="/firstcomponent" routerLinkActive="active">First Component</a></li>
    <li><a routerLink="/secondcomponent" routerLinkActive="active">Second Component</a></li>
    <li><a routerLink="/usercomponent" routerLinkActive="active">API Component</a></li>
  </ul>
</nav>
  <router-outlet></router-outlet>


  <app-footer></app-footer>
`,
})
export class AppComponent {
  title = 'ExeterFullStackExcercise';
}
