import { Parecer } from "../enums/parecer.enum";

export class Processo {
  private _nome: string;
  private _matricula: number;
  private _parecer: Parecer;

  constructor({
    nome = null,
    matricula = null,
    parecer = null
  }) {
    this._nome = nome;
    this._matricula = matricula;
    this._parecer = parecer;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
      this._nome = value;
  }

  get matricula(): number {
    return this._matricula;
  }

  set matricula(value: number) {
    this._matricula = value;
  }

  get parecer(): Parecer {
    return this._parecer;
  }

  set parecer(value: Parecer) {
    this._parecer = value;
  }

}
