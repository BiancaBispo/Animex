import { Component, OnInit } from '@angular/core';

//Importar o service
import { AnimexApiService } from 'src/app/service/animex-api.service';

//Importar a classe Router 
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-anime-edit',
  templateUrl: './anime-edit.component.html',
  styleUrls: ['./anime-edit.component.css']
})
export class AnimeEditComponent implements OnInit {

  // Titulo ao componente
  tituloComp: string = 'Alterar Anime'

  constructor(
    public animexApi: AnimexApiService,
    public roteamento: Router,
    public gps: ActivatedRoute
  ) { }

  // Copia da rota
  copiaRota = this.gps.snapshot.params['id']

  //Receber os dados
  atualizarAnime: any = {} 

  //Priorizar o carregamento
  ngOnInit(): void {
    this.animexApi.acessarUmAnime(this.copiaRota).subscribe((dados:any) => {
      this.atualizarAnime = dados
    })
  }

  // Atualizar
  atualizacaoAnimes(){
    if(confirm('Tem certeza que deseja alterar esse Anime?')){
      this.animexApi.alterarAnime(this.copiaRota, this.atualizarAnime).subscribe(() => {
        this.roteamento.navigate(['/anime-list']) //Voltar para lista quando finalizado
      })
    }
  }


}
