import create from '../classes/handlers/create'
import index from '../classes/handlers/index'
import { Request, Response } from "express";

export default class ClassesController {
  create(req: Request, res: Response) {
    return create(req, res)
  }
  index(req: Request, res: Response) {
    return index(req, res)
  }
}