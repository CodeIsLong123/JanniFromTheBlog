import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from '../Header/Header.Component';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
    selector: 'Home-Component',
    templateUrl: './Home.Component.html',
    styleUrl: './Home.Component.scss',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, HeaderComponent],
    standalone:true

})
export class HomeComponent {

}
