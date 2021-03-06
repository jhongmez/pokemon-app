import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseURL = environment.urlAPI;

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number){
    return this.http.get(`${this.baseURL}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getInfoPokemon(id: string) {
    return this.http.get(`${this.baseURL}/pokemon/${id}/`);
  }

}
