import { InternalResponse } from './internalResponse';

export class RespuestaLambda {
  public statusCode: number;

  public body: unknown;

  public headers: unknown;

  constructor(payload: InternalResponse) {
    if (payload.esError) {
      const respuesta = {
        codigo: payload.codigo,
        mensaje: `${payload.mensajeCliente} ( ${payload.codigo} )`,
        payload: {},
      };
      this.statusCode = payload.statusCode;
      this.body = JSON.stringify(respuesta);
      this.headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': true,
      };
    } else {
      const resp = {
        codigo: 200,
        mensaje: 'Petición Ejecutada Correctamente',
        payload: payload.payload,
      };

      this.statusCode = 200;
      this.body = JSON.stringify(resp);
      this.headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': true,
      };
    }
  }
}
