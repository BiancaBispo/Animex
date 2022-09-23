import { Component, OnInit } from '@angular/core';

//import { AnimexApiService } from 'src/app/service/animex-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  //Coleção dos dados
  //listaAnimes: any = []

  constructor(
    //public animexApi: AnimexApiService

  ) { }

  ngOnInit(): void {
    
   // this.exibirAnimes()
  }

  tituloComp: string = "Bem vindo a aplicação de cadastro de animes!"
  textoComp: string = "Selecione uma ação no menu superior."
  nomeProjeto: string = 'Animex'


/*  exibirAnimes(){
    this.animexApi.lerDadosAnime().subscribe((dados:{}) => {
      this.listaAnimes = dados
    })

  }

  excluirAnime(id: any){
    if(confirm('Tem certeza que deseja excluir este Anime?'))
    this.animexApi.excluirAnime(id).subscribe(() => {
      this.exibirAnimes()
    })
  }
*/

  }


