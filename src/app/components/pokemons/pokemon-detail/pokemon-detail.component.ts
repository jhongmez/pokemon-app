import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons: any;

  constructor(
    private route: ActivatedRoute, 
    private pokemonService: PokemonService, 
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe( (params) => {
      const id = params['id'];
      this.pokemons = this.pokemonService.getInfoPokemon(id);
    })
  }

  goBack() {
    this.location.back();
  }

}

