import {
    APIGatewayEvent,
    Context,
    Callback
  } from 'aws-lambda';

import { RespuestaLambda } from '../utils/lambdaResponse';
import { InternalResponse } from '../utils/internalResponse';


export const handlerPostDocumentationExample = async (
    _event: APIGatewayEvent,
    _context: Context,
    _callback: Callback
  ): Promise<void> => {
    _context.callbackWaitsForEmptyEventLoop = false;
    const salida: InternalResponse = new InternalResponse();
    salida.payload = 'Hola';
    _callback(null, new RespuestaLambda(salida));
};
  
export const handlerGetDocumentationExample = async (
    _event: APIGatewayEvent,
    _context: Context,
    _callback: Callback
  ): Promise<void> => {
    _context.callbackWaitsForEmptyEventLoop = false;
    const salida: InternalResponse = new InternalResponse();
    salida.payload = 'Hola';
    _callback(null, new RespuestaLambda(salida));
};
  