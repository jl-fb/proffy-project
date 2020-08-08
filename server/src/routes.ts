import express from "express";

import ClassesController from "./controllers/classes/ClassesController";
import ConnectionController from "./controllers/connections/ConnectionsController";

const router = express.Router()
const classesController = new ClassesController()
const connectionController = new ConnectionController()


router.post("/classes", classesController.create)
router.get("/classes", classesController.index)

router.post('/connections', connectionController.create)
router.get('/connections', connectionController.index)


export default router