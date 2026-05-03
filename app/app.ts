import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/Header/Header.Component';
import { AboutComponent } from './Components/About/About.Component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderComponent,
    AboutComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('blogpage');
}
