import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/Home/Home.Component';
import { AboutComponent } from './Components/About/About.Component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { name: 'Home' } },
  { path: 'about', component: AboutComponent, data: { name: 'About' } },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }