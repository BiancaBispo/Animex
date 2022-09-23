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
  dataForm: any
  
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
    public roteamento: Router,
    public rotaAtiva: ActivatedRoute

    ) { }

  // Copia da rota
  copiaRota = this.rotaAtiva.snapshot.params['id']

  
  ngOnInit(): void {
    this.dataForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      type: new FormControl('', Validators.compose([Validators.required])),
      years: new FormControl('', this.validarAno),
      author: new FormControl('', Validators.compose([Validators.required]))
    })
    
    /*this.rotaAtiva.queryParams.subscribe((params: Params) => {
      this.animeId = params['id']
      if(this.animeId !== undefined) {
        this.getAnimeDetailById(this.animeId)
        this.mode = 'Create'
      } else {
        this.animeDetail['id'] = 0
        this.mode = 'Add'
      }
    })*/
  }

    // GET dos detalhes do anime (Nome, Tipo, Ano e Autor)
    getAnimeDetailById(id: string) {
      this.animeDetail = this.animexApi.getAnimeById(parseInt(id))
      console.log(this.animeDetail)
    }

  //Enviar dados capturados - a partir da view - para o service
  inserirAnimes(form: any){
    if(form.valid){
      this.animexApi.inserirAnimes(this.dadosAnime).subscribe(() => {
        this.roteamento.navigate(['/anime-list'])
      })
    }
  }

  validarAno(valorAno: any) {
    if (valorAno.value.length != 4) {
      return {years: true}
    }
    return null
  }

    // Cancelar e voltar a página anterior
    onClickCancel() {
      this.roteamento.navigate(['/home'])
    }

    
}
