import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseURL = environment.urlAPI;

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`${this.baseURL}/pokemon?limit=5`);
  }

  getInfoPokemon(name: string) {
    return this.http.get(`${this.baseURL}/pokemon/${name}/`);
  }

}
