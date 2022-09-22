import { Component, OnInit } from '@angular/core';

//Importar o service
import { AnimexApiService } from 'src/app/service/animex-api.service';

//Importar a classe Router 
import { ActivatedRoute, Router, Params } from '@angular/router';

// Importar a interface Anime
import { Anime } from 'src/app/model/anime';


@Component({
  selector: 'app-anime-edit',
  templateUrl: './anime-edit.component.html',
  styleUrls: ['./anime-edit.component.css']
})
export class AnimeEditComponent implements OnInit {

  // Titulo ao componente
  tituloComp: string = 'Alterar Anime'

  public animeId!: string;
  public animeDetail = <Anime>{};
  public mode!: string;

  constructor(
    public animexApi: AnimexApiService,
    public roteamento: Router,
    public rotaAtiva: ActivatedRoute
  ) { }

  // Copia da rota
  copiaRota = this.rotaAtiva.snapshot.params['id']

  //Receber os dados
  atualizarAnime: any = {} 

  //Priorizar o carregamento
  ngOnInit(): void {
    this.animexApi.acessarUmAnime(this.copiaRota).subscribe((dados:any) => {
      this.atualizarAnime = dados
    })

    this.rotaAtiva.queryParams.subscribe((params: Params) => {
      this.animeId = params['id']
      if(this.animeId !== undefined) {
        console.log(this.animeId)
        this.getAnimeDetailById(this.animeId)
        this.mode = 'Edit'
      } else {
        console.log(this.animeId);
        this.animeDetail['id'] = 0
        this.mode = 'Add'
      }
    })
  }
  // GET dos detalhes do anime (Nome, Tipo, Ano e Autor)
  getAnimeDetailById(id: string) {
    this.animeDetail = this.animexApi.getAnimeById(parseInt(id))
    console.log(this.animeDetail)
  }

  // Atualizar
  atualizacaoAnimes(){
    if(confirm('Tem certeza que deseja alterar esse Anime?')){
      this.animexApi.alterarAnime(this.copiaRota, this.atualizarAnime).subscribe(() => {
        this.roteamento.navigate(['/anime-list']) //Voltar para lista quando finalizado
      })
    }
  }

  teste(form: any) {
    console.log(form)
  }

  // Cancelar e voltar a página anterior
  onClickCancel() {
    this.roteamento.navigate(['/anime-list'])
  }


}
