import { Component, OnInit } from '@angular/core';
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {UF} from './types/uf';
import {UFService} from './services/uf.service'
import {DadoNome} from "./types/todasufs";
import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'
import {TodasUFsService} from "./services/todasufs.service";
import {UFs} from './services/mock-ufs';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'my-todos-dados',
  templateUrl: './todos-dados.component.html',
  styleUrls: ['./app.component.css']
})

export class TodosDadosComponent implements OnInit {
    title = 'Todos os dados do maravilhoso serviço da SAMU em todos os estados desse Brasilzão maravilhoso';
    dados: DadoNome[];

    constructor(private TodasUFsService: TodasUFsService)
    { }

    ngOnInit(): void {
        this.TodasUFsService.mesclardados().then( dados =>
          this.dados = dados);
    }

}
