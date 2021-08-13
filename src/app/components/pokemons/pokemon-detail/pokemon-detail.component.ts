import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  
  public activeLang = 'es';
  
  pokemons: any;

  constructor(
    private route: ActivatedRoute, 
    private pokemonService: PokemonService, 
    private location: Location,
    private translate: TranslateService) {

      this.translate.setDefaultLang(this.activeLang);

  }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe( (params) => {
      const id = params['id'];
      this.pokemons = this.pokemonService.getInfoPokemon(id);
    })
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  goBack() {
    this.location.back();
  }

}

