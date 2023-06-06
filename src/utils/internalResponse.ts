export class InternalResponse {
  public esError: boolean;

  public payload: any;

  public codigo: number;

  public statusCode: number;

  public mensajeCliente: string;

  public mensajeTecnico: string;

  constructor() {
    this.esError = false;
    this.payload = {};
    this.codigo = 0;
    this.statusCode = 200;
    this.mensajeCliente = 'Ocurrio un error al procesar la peticion';
    this.mensajeTecnico = '';
  }

  static buildErrorResponse(error: Error): InternalResponse {
    const instance = new InternalResponse();
    instance.esError = true;
    return instance;
  }
}
