import { Request, Response } from "express";

import db from "../../../database/connection";

import { ScheduleItem } from "../../../models/schedule";
import convertHourToMinutes from "../../../functions/convertHourToMinutes";


//TODO abstrari ainda mais 
const create = async (req: Request, res: Response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = req.body

  /**
   * Tecnica de transaction para fazer todas as requisições no db,
   * se não houver erro, caso ocorra nenhuma operação é efetivada 
   * */
  const trx = await db.transaction()

  try {
    const insertesUsersIds = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio
    })

    const user_id = insertesUsersIds[0]

    const insertedClassesIds = await trx('classes').insert({
      subject,
      cost,
      user_id
    })

    const class_id = insertedClassesIds

    const class_schedule = schedule.map((item: ScheduleItem) => {
      return {
        class_id,
        week_day: item.week_day,
        from: convertHourToMinutes(item.from),
        to: convertHourToMinutes(item.to)
      }
    })

    await trx('class_schedule').insert(class_schedule)

    await trx.commit()

    return res.status(201).send()

  } catch (error) {
    console.log("Erro ao inserir aula", error);
    await trx.rollback()
    return res.status(400)
      .json({
        error: 'Unexpected error while creating new class'
      })
  }
}

export default create