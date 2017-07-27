import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs';

@Component({
  selector: 'my-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./app.component.css']
})

export class ResumoComponent implements OnInit {
    title = 'Resumo do serviço da SAMU nesse estado maravilhoso que é o';
    ufs : UF[];
    uf: UF;
    qtd: number;
    media: number;
    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.uf = this.ufService.getPorID(23);
        // this.media = this.samuService.mediaMunicipio(23);
        this.samuService.getPorUFMunicipiosAtendidosPorEstado(23).then(
            dados_da_samu => this.media = this.samuService.calcularMedia(dados_da_samu));
    }
}
