import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { UF } from '../types/uf';
import { DadoNome} from '../types/todasufs'

import { UFService } from './uf.service';
import { SamuService } from './samu.service';

@Injectable()
export class TodasUFsService {

  constructor(private ufService: UFService, private samuService: SamuService) {}

  mesclardados() : Promise<DadoNome[]> {
    return this.samuService.getAllMunicipiosAtendidosPorEstado().then((valores) => {
      let resultado : DadoNome[] = [];
      let ordenado = valores.sort(ordenar);

      ordenado.forEach((item) => {
        this.ufService.getPorIDPromise(item.uf_id).then((uf) => {
          resultado.push(dado_novo(item.ano, item.valor, uf));
        });
        // let uf = this.ufService.getPorID(item.uf_id);
        // resultado.push(dado_novo(item.ano, item.valor, uf));
      });

      return resultado;
    });
  }
}

function ordenar(d1, d2) {
  if (d1.uf_id > d2.uf_id) return 1;
  if (d1.uf_id < d2.uf_id) return -1;
  return 0;
}

function dado_novo(ano: number, valor: number, uf: UF) {
    let dado = new DadoNome();
    dado.ano = ano;
    dado.valor = valor;
    dado.uf = uf;
    return dado;
}
