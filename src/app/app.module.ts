import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { from } from 'rxjs';
import { UserComponent } from './components/user/user.component';
import { HttpModule } from '@angular/http';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    SecondComponent,
    UserComponent,
    NotFoundComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

