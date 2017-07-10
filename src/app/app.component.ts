import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    title = 'Detalhes do serviço da SAMU, maravilhoso, né?';
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
        this.uf = this.ufService.encontrarUF(23);
        this.dados = this.samuService.encontrarSAMU(23);
        this.media = this.samuService.mediaMunicipio(23);
    }
}
