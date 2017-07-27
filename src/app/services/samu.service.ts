import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { DadoNome } from '../types/todasufs'
import { Dados } from '../types/samu';
// import { VALORES } from '../in-memory-data.service';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class SamuService {

  private dadosUrl = 'api/VALORES';  // URL to web api

  constructor(private http: Http) { }

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return this.http.get(this.dadosUrl)
    .toPromise()
    .then(response => response.json().data as Dados[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro', error);
    return Promise.reject(error.message || error);
  }

  calcularMedia(dados: Dados[]): number {
      let soma = 0;
      dados.forEach(dado => soma+= dado.valor);
      return Math.round(soma/dados.length);
  }

  getPorUFMunicipiosAtendidosPorEstado(uf_id: number): Promise<Dados[]>{
    return this.http.get(this.dadosUrl)
      .toPromise()
      .then((response) => {
        let dados = response.json().data as Dados[];
        let resumo = dados.filter(dado => dado.uf_id == uf_id);
        return resumo;
      })
      .catch(this.handleError);
  }
}
