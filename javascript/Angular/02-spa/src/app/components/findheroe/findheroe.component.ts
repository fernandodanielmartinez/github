import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../services/heroes.services';

@Component({
  selector: 'app-findheroe',
  templateUrl: './findheroe.component.html',
  styleUrls: ['./findheroe.component.css']
})
export class FindheroeComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activatedroute: ActivatedRoute,
               private _heroesService: HeroesService ) { }

  ngOnInit() {

    this.activatedroute.params.subscribe ( params => {
      console.log ( params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.findHeroe( params['termino'] );
    });

  }

}
