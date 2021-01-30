import { Parecer } from "../enums/parecer.enum";

export interface IProcesso {
  nome: string,
  matricula: string,
  parecer: string,
  idade?: number
}
