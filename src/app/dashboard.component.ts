import { Component } from "@angular/core";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { OnInit } from "@angular/core";

@Component({

    selector:'my-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
    
    
})

export class DashboardComponent implements OnInit{

    

    constructor(private heroService:HeroService){
        
    }

    heroes:Hero[];

    ngOnInit():void{
        this.heroService.getHeros().then(heros => this.heroes = heros.slice(1,5))
    }

}