import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeCreateComponent } from './anime-create/anime-create.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
