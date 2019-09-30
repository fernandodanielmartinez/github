import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesservice: HeroesService,
               private router: Router ) { }

  ngOnInit() {

    this.heroes = this._heroesservice.getHeroes();

  }

  verHeroe( index: number ) {
    this.router.navigate( ['/heroe', index]);
  }

}
