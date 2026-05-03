import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from '../Header/Header.Component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { subscribeOn } from 'rxjs';
@Component({
    selector: 'Aritcle-Component',
    templateUrl: './Aritcle.Component.html',
    styleUrl: './Aritcle.Component.scss',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, HeaderComponent],
    standalone:true

})
export class ArticleComponent  {

    ngOnInit(){
    
    }

    private loadBoilerArticle (): void{

        [
            {
                name: "Article 1",
                tags: "scss",
            },
            {
                name: "Article 2",
                tags: "scss",
            }
        ]
    }
    
}
