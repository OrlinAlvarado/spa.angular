import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string = "";
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) { 

    this.activatedRoute.params.subscribe( params => {
      if(params['termino']){
        this.termino = params["termino"];
        this.cargarDatos();
      }
    })
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    if(this.termino.length > 0){
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    } else {
      this.heroes = this._heroesService.getHeroes();
    }

  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
  }

}
