import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs';

@Component({
  selector: 'my-dados-uf',
  templateUrl: './dados-uf.component.html',
  styleUrls: ['./app.component.css'],
})

export class DadosUFComponent implements OnInit {
    title = 'Dados desse estado maravilhoso que é o ';
    ufs : UF[];
    uf: UF;
    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.uf = this.ufService.getPorID(23);
    }
}
