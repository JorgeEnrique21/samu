import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs';

@Component({
  selector: 'my-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
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
        this.media = this.samuService.mediaMunicipio(23);
    }
}
