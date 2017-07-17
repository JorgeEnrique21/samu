import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs';

@Component({
  selector: 'my-todos-dados',
  templateUrl: './todos-dados.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})

export class TodosDadosComponent implements OnInit {
    title = 'Todos os dados do maravilhoso serviço da SAMU';
    ufs : UF[];
    uf: UF;
    qtd: number;
    media: number;
    dados: Dados[];
    dados_da_samu : Dados[];
    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.getPorID(23);
        this.dados = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf);
        this.media = this.samuService.mediaMunicipio(23);
    }
}
