import { Request, Response, response } from "express";
import db from "../../../database/connection";


const create = async (req: Request, res: Response) => {
  const { user_id } = req.body

  await db('connections').insert({
    user_id,
  })

  return res.status(201).send()
}

export default create