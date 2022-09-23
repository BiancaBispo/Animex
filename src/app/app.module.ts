import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importar os modulos necessários para a API
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeCreateComponent } from './componentes/anime-create/anime-create.component';
import { AnimeEditComponent } from './componentes/anime-edit/anime-edit.component';
import { AnimeListComponent } from './componentes/anime-list/anime-list.component';
import { HomeComponent } from './componentes/home/home.component';

// Importar o service
import  { AnimexApiService } from  './service/animex-api.service';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeCreateComponent,
    AnimeEditComponent,
    AnimeListComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AnimexApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
