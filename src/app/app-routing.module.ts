import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimeCreateComponent } from './componentes/anime-create/anime-create.component';
import { AnimeEditComponent } from './componentes/anime-edit/anime-edit.component';
import { AnimeListComponent } from './componentes/anime-list/anime-list.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'anime-create', component: AnimeCreateComponent},
  {path: 'anime-edit/:id', component: AnimeEditComponent},
  {path: 'anime-list', component: AnimeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
