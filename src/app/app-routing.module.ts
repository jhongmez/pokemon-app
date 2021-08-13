import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./components/pokemons/pokemon-list/pokemon-list.module')
    .then(m => m.PokemonListModule) 
  }, 
  { 
    path: 'detail/:id', 
    loadChildren: () => import('./components/pokemons/pokemon-detail/pokemon-detail.module')
    .then(m => m.PokemonDetailModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
