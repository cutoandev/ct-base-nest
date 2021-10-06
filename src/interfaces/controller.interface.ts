import { Response, Request } from 'express';

export class ResponseModel {
  status: 'success' | 'failed';
  message: string;
  data: any;

  /**
   *
   */
  constructor(model: { status: 'failed'; data: null; message: '' }) {
    this.status = model.status;
    this.data = model.data;
    this.message = model.message;
  }
}

export interface IController<T> {
  create(model: T, req: Request, res: Response);
  update(model: T, req: Request, res: Response);
  delete(req: Request, res: Response);
  getById(req: Request, res: Response);
}
