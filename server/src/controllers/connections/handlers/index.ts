import { Request, Response, response } from "express";
import db from "../../../database/connection";


const index = async (req: Request, resp: Response) => {

  const totalConnections = await db('connections').count('* as total')

  const { total } = totalConnections[0]

  return resp.json({ total })
}

export default index