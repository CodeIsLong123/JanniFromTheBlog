import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/Home/Home.Component';
import { AboutComponent } from './Components/About/About.Component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'About',
    component:AboutComponent
  }
];