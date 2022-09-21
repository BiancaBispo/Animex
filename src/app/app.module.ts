import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importar o modulo HttpClient
import { HttpClientModule } from '@angular/common/http';

import  { AnimexApiService } from  './service/animex-api.service';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeCreateComponent } from './componentes/anime-create/anime-create.component';
import { AnimeEditComponent } from './componentes/anime-edit/anime-edit.component';
import { AnimeListComponent } from './componentes/anime-list/anime-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeCreateComponent,
    AnimeEditComponent,
    AnimeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [AnimexApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
