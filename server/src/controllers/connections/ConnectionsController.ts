import { Request, Response } from "express";
import index from "./handlers";
import create from "./handlers/create";

export default class ConnectionController {
  async index(req: Request, res: Response) {
    return index(req, res)
  }

  async create(req: Request, res: Response) {
    return create(req, res)
  }
}