import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../Services/heroes.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  constructor(private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _ruta:Router) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params =>{
      this.termino = (params['term']);
      this.heroes = this._heroesService.buscarHeroes(params['term']);
      console.log(this.heroes);
    });
  }
  verHeroe(index:number){
    this._ruta.navigate(['/heroe',index])
    }
}
