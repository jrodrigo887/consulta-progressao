import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SheetsGoogleService } from 'src/app/services/sheets-google.service';

@Component({
  selector: 'app-consulta-processos',
  templateUrl: './consulta-processos.component.html',
  styleUrls: ['./consulta-processos.component.css']
})
export class ConsultaProcessosComponent implements OnInit {
  private _sheet;
  form = new FormGroup({
    inputSearch: new FormControl('')
  });

  @Output() changeData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  /*   this.googleSheet.getConnection()
    .then((workSheets) => {
      this._sheet = workSheets.sheetsByIndex[0];
      console.log(this._sheet.nome);
    })
    .catch((error) => {
      console.log(error);
    }) */

    this.form.get('inputSearch').valueChanges
      .subscribe(v => this.changeData.emit(v));

  }

}
