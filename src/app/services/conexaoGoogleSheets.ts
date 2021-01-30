import { GoogleSpreadsheet as GSheet} from 'google-spreadsheet';


export class ConexaoGoogleSheets {
    private doc = new GSheet('17TB38qe2ucy9P75ptcNg3nfjGBipQEWspiSBsIGyXSo');

    async conection() {
      try {
        await this.doc.useServiceAccountAuth({
          client_email: process.env.client_email,
          private_key: process.env.private_key
      });
      } catch (e) {
        new Error('Usuário não autenticado.');
      }
    };

    async getConnection(): Promise<any> {
      try {
        await this.conection();
        await this.doc.loadInfo();
        return this.doc;
      } catch (e) {
        return new Error('Não foi possível carregar os dados da planilha.');
      }
    }





}
