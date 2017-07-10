import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }
  encontrarUF(id: number): UF{
    let uf: UF;
      for (let entry of UFs) {
          if (entry.id==id) {
              return entry;
          }
      }
  }
}
