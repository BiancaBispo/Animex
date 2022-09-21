import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tituloComp: string = "Bem vindo a aplicação de cadastro de animes!"
  textoComp: string = "Selecione uma ação no menu superior."

}
