import { Component } from '@angular/core';
import { IProcesso } from './core/interfaces/IProcesso';
import { SheetsGoogleService } from './services/sheets-google.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consulta-progressao';

  constructor(
    private serviceSheets: SheetsGoogleService
  ) {}

  count = 0
  public async pesquisar(data){
    this.count++
    if (data !== null && this.count === 7) {
      console.log('Aqui foi!');
      const result = await this.findProgressaoByMatricula(data)
      console.log('Resultado: ' + result)
    }
  }

  async findProgressaoByMatricula(matricula) {
    this.serviceSheets.getUsers()
    .subscribe(data => console.log(data));
  }


}
