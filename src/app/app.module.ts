import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { ResumoComponent } from "./resumo.component";
import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';
import { DadosUFComponent } from './dados-uf.component';
import { TodosDadosComponent } from './todos-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    DadosUFComponent,
    TodosDadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'resumo',
        component: ResumoComponent
      },
      {
        path: 'dados-uf',
        component: DadosUFComponent
      },
      {
        path: 'todos-dados',
        component: TodosDadosComponent
      }
    ])
  ],
  providers: [SamuService, UFService],
  bootstrap: [AppComponent]
})

export class AppModule { }
