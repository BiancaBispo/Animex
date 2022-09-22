import { Component, Injectable, OnInit } from '@angular/core';

//Importar o service
import { AnimexApiService } from 'src/app/service/animex-api.service';

//Importar a classe Router 
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-anime-edit',
  templateUrl: './anime-edit.component.html',
  styleUrls: ['./anime-edit.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class AnimeEditComponent implements OnInit {

  // Titulo ao componente
  tituloComp: string = 'Alterar Anime'

  form!: FormGroup;
  submitted = false;

  constructor(
    public animexApi: AnimexApiService,
    public roteamento: Router,
    public rotaAtiva: ActivatedRoute,
    private fb: FormBuilder
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

    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required])
    })
  }


  // Verifica erros
  hasError(field: string) {
    return this.form.get(field)?.errors
  }

  // Cancelar a alteração
  onCancel() {
    this.roteamento.navigate(['/anime-list'])
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
