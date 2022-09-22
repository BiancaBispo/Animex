import { Component, OnInit } from '@angular/core';

// Importar o service - que tem nossos métodos get, post, put e delete
import { AnimexApiService } from 'src/app/service/animex-api.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  //Titulo
  tituloComp: string = "Listar animes cadastrados"

  //Coleção dos dados
  listaAnimes: any = []

  //Referência de instância 
  constructor(public animexApi: AnimexApiService) { }

  ngOnInit(): void {
    this.exibirAnimes()
  }

  // Recuperar todos os dados na base
  exibirAnimes(){
    this.animexApi.lerDadosAnime().subscribe((dados:{}) => {
      this.listaAnimes = dados
    })

  }

  //Colocar excluir aquiii
  
}
