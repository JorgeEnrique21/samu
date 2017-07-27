import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {

  constructor(private http: Http) {}

  getAll(): UF[] {
    return UFs;
  }

  getPorID(id: number): UF {
    let uf: UF;
      for (let entry of UFs) {
          if (entry.id==id) {
              return entry;
          }
      }
  }

  getPorIDPromise(id: number): Promise<UF> {
    return this.http.get('/api/ufs')
    .toPromise()
    .then((response) => {
      let ufs = response.json().data as UF[];
      return ufs.find(uf => uf.id == id);
    });
  }

}
