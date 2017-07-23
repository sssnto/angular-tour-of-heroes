import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'my-heros',
  templateUrl:'./heros.component.html',
  styleUrls:['./heros.component.css']
})



  export class HerosComponent implements OnInit{
    
    

    constructor(
      private heroService: HeroService,
      private router:Router) 
    {}

    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero): void{
      this.selectedHero = hero;
    }

    getHeros(): void{
      this.heroService.getHeros().then(heroes => this.heroes = heroes);
      // this.heroes = this.heroService.getHeros();
    }
    
    ngOnInit(): void{
      this.getHeros();
    }

    gotoDetail():void{
      this.router.navigate(['/detail',this.selectedHero.id]);
    }
    
}

