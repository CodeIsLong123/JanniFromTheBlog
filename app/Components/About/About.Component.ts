import { Component, signal, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common'; // 1. Import this

import { HeaderComponent } from '../Header/Header.Component';
@Component({

    selector: 'About-Component',
    templateUrl: './About.Component.html',
    styleUrl: './About.Component.scss',
    standalone: true,

    imports: [MatToolbarModule, MatButtonModule, MatIconModule, HeaderComponent, CommonModule],

})
export class AboutComponent  {

    


    readFiles(): void{

    }


    

}







