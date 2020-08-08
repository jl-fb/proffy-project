import { Request, Response } from "express";

import db from "../../../database/connection";

import { ScheduleItem } from "../../../models/schedule";
import convertHourToMinutes from "../../../functions/convertHourToMinutes";

const index = async (req: Request, res: Response) => {

  const filters = req.query

  const subject = filters.subject as string
  const week_day = filters.week_day as string
  const time = filters.time as string

  if (!week_day || !subject || !time) {
    return res.status(400).json({
      error: "Missing filter parameters"
    })
  }

  const timeInMinutes = convertHourToMinutes(time)

  const classes = await db('classes')
    .whereExists(function () {
      this.select('class_schedule.*')
        .from('class_schedule')
        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
        .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
        .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
    })
    .where('classes.subject', '=', subject)
    .join('users', 'classes.user_id', '=', 'users.id')
    .select(['classes.*', 'users.*'])

  res.json(classes)
}

export default index