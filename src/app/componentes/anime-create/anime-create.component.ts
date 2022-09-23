import { Component, OnInit, Input } from '@angular/core';

//importando o service
import { AnimexApiService } from 'src/app/service/animex-api.service';

//Importando a classe Router
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Anime } from 'src/app/model/anime';

@Component({
  selector: 'app-anime-create',
  templateUrl: './anime-create.component.html',
  styleUrls: ['./anime-create.component.css']
})
export class AnimeCreateComponent implements OnInit {

  // Titulo
  tituloComp: string = 'Cadastrar Anime'

  // Propriedades para auxiliar o controle do formulário
  dataForm: any = {}
  
  //Objeto literal - chave-valor
  @Input() dadosAnime = {
    name: '',
    type: '',
    years: '',
    author: '',
  }

  public animeId!: string;
  public animeDetail = <Anime>{};
  public mode!: string;

  //Referência da instância
  constructor(
    public animexApi: AnimexApiService,
    public roteamento: Router
    ) { }
  
  ngOnInit(): void {
  }

  //Enviar dados capturados - a partir da view - para o service
  inserirAnimes(form: any){
    if(form.valid){
      console.log(this.dadosAnime)
      this.animexApi.inserirAnimes(this.dadosAnime).subscribe(() => {
        this.roteamento.navigate(['/anime-list'])
      })
    }
  }

    // Cancelar e voltar a página anterior
    onClickCancel() {
      this.roteamento.navigate(['/home'])
    }

    
}
