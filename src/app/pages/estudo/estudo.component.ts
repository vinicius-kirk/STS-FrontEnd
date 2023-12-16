import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.scss']
})
export class EstudoComponent implements OnInit {

  public aulas : any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.aulas = this.getAulas();
  }

  getAulas() {
    return [
      {
        nomeDoModulo: 'Módulo 1',
        aulas: [
          { nomeDaAula: 'Aula 1.1' },
          { nomeDaAula: 'Aula 1.2' },
          // Adicione mais aulas conforme necessário
        ],
      },
      {
        nomeDoModulo: 'Módulo 2',
        aulas: [
          { nomeDaAula: 'Aula 2.1' },
          { nomeDaAula: 'Aula 2.2' },
          // Adicione mais aulas conforme necessário
        ],
      },
      // Adicione mais módulos conforme necessário
    ];
  }
}
