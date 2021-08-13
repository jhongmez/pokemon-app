import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public activeLang = 'es';

  pokemons = [];
  page = 0;
  totalPokemons: number;
  orderPokemons: number;

  constructor(private pokemonService: PokemonService, private translate: TranslateService) {

    this.translate.setDefaultLang(this.activeLang);
    
  }

  ngOnInit(): void {
  
    this.getAllPokemons();

  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
  
  // Obtener todos los datos del pokemon
  getAllPokemons() {

    //getPokemons: Trae datos simples del pokemon
    //getInfoPokemon: Obtiene toda la info del pokemon
    this.pokemonService.getPokemons(4, this.page + 0)
      .subscribe( (response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach(results => {
          this.pokemonService.getInfoPokemon(results.name)
          .subscribe( (response: any) => {
            this.pokemons.push(response);
          });
        });
      });

  }


}
