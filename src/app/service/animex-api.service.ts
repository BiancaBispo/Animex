import { Injectable } from '@angular/core';

// Importar o model
import{ Anime } from '../model/anime';

//Importar os recursos para lidar com as requisições http
import{  HttpClient, HttpHeaders  } from '@angular/common/http';
import{  Observable, throwError  } from 'rxjs'; 
import{  retry, catchError  } from 'rxjs'; 


@Injectable()

export class AnimexApiService {

  // Caminho para a base de dados
  apiURL: string = 'http://localhost:3000'

  // Referencia de instância da classe HttpClient
  constructor(private reqHttp: HttpClient) { }

  //Credenciais de acesso
  autorizacaoAcesso = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  /* Métodos get(), post(), put() e deleted()  */

  //Mostrar os dados
  lerDadosAnime(): Observable<Anime> {
    return this.reqHttp.get<Anime>(this.apiURL+'/animes').pipe(retry(1), catchError(this.tratarErro))
  }

  getAnimeById(id: number): Anime {
    var animeArray = JSON.parse(this.apiURL+"/animes")
    console.log(animeArray)
    return animeArray
    .filter((anime: {id: number}) => anime.id === id)
    .pop()
  }

  // Acessar um registro aqui
  acessarUmAnime(id: number): Observable<Anime>{
    return this.reqHttp.get<Anime>(this.apiURL+'/animes/'+id).pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }


  //Inserir um novo registro
  inserirAnimes(dadosRecebidos: any): Observable<Anime>{
    return this.reqHttp.post<Anime>(this.apiURL+'/animes',JSON.stringify(dadosRecebidos), this.autorizacaoAcesso).pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }

  //Alterar um registro
  alterarAnime(id:any, novosDados:any): Observable<Anime>{
    return this.reqHttp.put<Anime>(this.apiURL+'/animes/'+id, JSON.stringify(novosDados), this.autorizacaoAcesso).pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }
  

  //Excluir um registro
  excluirAnime(id:any){
    return this.reqHttp.delete<Anime>(this.apiURL+'/animes/'+id, this.autorizacaoAcesso).pipe(
      retry(1),
      catchError(this.tratarErro)
    )
  }

  /* Tratando o erro: */
  tratarErro(erro:any){
    let mensagemErro: any = ''

    if(erro.error instanceof ErrorEvent) {
      mensagemErro = erro.error.message
    } else {
      mensagemErro = `Codigo do erro: ${erro.status}\nMensagem do erro é: ${erro.message}`
    }
    alert(mensagemErro)
    return throwError(() => mensagemErro)
  }
}



//Bianca Bispo
// Bruno
