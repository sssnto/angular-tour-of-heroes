import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService{

    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    };

    getHeroesslowly():Promise<Hero[]>{
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeros()),2000);
        });
    }
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
