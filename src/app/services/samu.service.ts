import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }
  mediaMunicipio(id: number): number {
    let uf: UF;
    let soma = 0;
    let qtd = 0;
    for (let entrada of VALORES){
      if(entrada.uf_id === id)
      {
        soma += entrada.valor;
        qtd++;
      }
    }
    return Math.round(soma/qtd);
  }

  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Dados[]{
    let dados: Dados[] = [];
    let i = 0;
      for (let entry of VALORES) {
          if (entry.uf_id==uf.id) {
              dados[i] = entry;
              i++;
          }
      }
      return dados;
  }
}
