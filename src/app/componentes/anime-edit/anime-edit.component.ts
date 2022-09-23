import { Component, OnInit } from '@angular/core';

//Importar o service
import { AnimexApiService } from 'src/app/service/animex-api.service';

//Importar a classe Router 
import { ActivatedRoute, Router, Params } from '@angular/router';

// Importar a interface Anime
import { Anime } from 'src/app/model/anime';
import { FormsModule } from '@angular/forms';


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
  }
  // GET dos detalhes do anime (Nome, Tipo, Ano e Autor)
  getAnimeDetailById(id: string) {
    this.animeDetail = this.animexApi.getAnimeById(parseInt(id))
    console.log(this.animeDetail)
  }

  // Atualizar
  atualizacaoAnimes(form: any){
    if(form.valid){
      this.animexApi.alterarAnime(this.copiaRota, this.atualizarAnime).subscribe(() => {
        this.roteamento.navigate(['/anime-list']) //Voltar para lista quando finalizado
      })
    }
  }

  // Cancelar e voltar a página anterior
  onClickCancel() {
    this.roteamento.navigate(['/anime-list'])
  }


}
