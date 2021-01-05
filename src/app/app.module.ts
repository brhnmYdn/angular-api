import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxsModule} from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home.component';
import {HomeState} from './components/state/home.state';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const STATES = [
  HomeState
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    NgxsModule.forRoot(STATES, { // State tanımlaması böyle olmalı
      developmentMode: !environment.production
    }),
    NgxsRouterPluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
