import { Component, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'Header-Component',
    templateUrl: './Header.Component.html',
    styleUrl: './Header.Component.scss',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule],
    standalone: true,
    

})
export class HeaderComponent implements OnInit{
    routes: { path: string | undefined; name: void | string[]; }[] = [] ;
    
    constructor(private router: Router) { }
 
    ngOnInit(): void {
        console.log(this.router, this.routes)
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.routes  = this.router.config
            .filter(route => route.data && route.data["name"])
            .map(route => ({ path: route.path, name: route.data?["name"]: name}));
        });
    }


    onClick(): void{
        this.router.navigate(["/About"])
    }
    onClickHome():void {
        this.router.navigate(["/"])
    }
}