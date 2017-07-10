import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }
  encontrarSAMU(id: number): Dados[]{
    let dados: Dados[] = [];
    let i = 0;
      for (let entry of VALORES) {
          if (entry.uf_id==id) {
              dados[i] = entry;
              i++;
          }
      }
      return dados;
  }
}
