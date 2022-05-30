import { Request } from 'express';

export type ResponseError = {
  error: unknown;
}

export interface RequestWithBody<T> extends Request {
  body: T,
}

enum ControllerError {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}

abstract class Controller<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(protected service: Service<T>) {}

  abstract create()
}