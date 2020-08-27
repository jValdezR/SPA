import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../Services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      // console.log('El parametro es: ', params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }
}
