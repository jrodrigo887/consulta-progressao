import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as GSheet from 'googleapis' ;
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment.dev';
import { IProcesso } from '../core/interfaces/IProcesso';


const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'token.json';

@Injectable({
  providedIn: 'root'
})
export class SheetsGoogleService {

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get('https://5e9b37ae10bf9c0016dd1c33.mockapi.io/api/usuarios')
  }

  public findProgressaoByMatricula(matricula): Promise<IProcesso[]> {
    return new Promise<any>((resolve, reject) => {
        apiProgressoes.forEach(vl => {
          console.log( vl.matricula.localeCompare(matricula) )
          setTimeout(() => {
            if ( vl.matricula == matricula ) {
              resolve(vl);
            }
          }, 1000)
        });
    });
  }




}

const apiProgressoes: IProcesso[] = [
  {
    matricula: '1790011',
    nome: 'Joao',
    parecer: 'DEFERIDO'
  },
  {
    matricula: '1756677',
    nome: 'MAURICIO',
    parecer: 'INDEFERIDO'
  },{
    matricula: "1757788",
    nome: 'SOUSA',
    parecer: 'DEFERIDO'
  },{
    matricula: "1788899",
    nome: 'FILIPE',
    parecer: 'DEFERIDO'
  },{
    matricula: '1759900',
    nome: 'MARIA',
    parecer: 'INDEFERIDO'
  },{
    matricula: '1751122',
    nome: 'PAULA',
    parecer: 'DEFERIDO'
  },
]

/*   private doc = new GSheet('17TB38qe2ucy9P75ptcNg3nfjGBipQEWspiSBsIGyXSo');

  async conection() {
    try {
      await this.doc.useServiceAccountAuth({
        client_email: environment.client_email,
        private_key: environment.private_key
    });
    } catch (e) {
      new Error('Usuário não autenticado.');
    }
  }; */

/*
  async getConnection(): Promise<any> {
    try {
      await this.conection();
      await this.doc.loadInfo();
      return this.doc;
    } catch (e) {
      return new Error('Não foi possível carregar os dados da planilha.');
    }
  } */


// }
