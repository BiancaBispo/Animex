import { Component, OnInit, Input } from '@angular/core';

//importando o service
import { AnimexApiService } from 'src/app/service/animex-api.service';

//Importando a classe Router
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  //Referência da instância
  constructor(
    public animexApi: AnimexApiService,
    public roteamento: Router
    ) { }

  
  ngOnInit(): void {
    this.dataForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      type: new FormControl('', Validators.compose([Validators.required])),
      years: new FormControl('', this.validarAno),
      author: new FormControl('', Validators.compose([Validators.required]))
    })
  }

  //Enviar dados capturados - a partir da view - para o service
  inserirAnimes(){
    this.animexApi.inserirAnimes(this.dadosAnime).subscribe(() => {
      this.roteamento.navigate(['/anime-list'])
    })
  }

  validarAno(valorAno: any) {
    if (valorAno.value.length != 4) {
      return {years: true}
    }
    return null
  }

}
