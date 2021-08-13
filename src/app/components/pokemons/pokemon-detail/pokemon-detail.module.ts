import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailComponent } from './pokemon-detail.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ]
})
export class PokemonDetailModule { }
