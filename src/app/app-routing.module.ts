import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routesArr: Routes = [
  { path: 'firstcomponent', component: FirstComponent}, 
  { path: 'secondcomponent', component: SecondComponent},
  { path: 'usercomponent', component: UserComponent},
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routesArr)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
