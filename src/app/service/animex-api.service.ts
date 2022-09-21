import { Injectable } from '@angular/core';

// Importar o model
import {Anime} from '../model/anime';

//Importar os recursos para lidar com as requisições http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError,  } from 'rxjs';
import { retry, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimexApiService {

  constructor() { }
}
