import { Router } from "express";
import { TaskController } from "../controllers/task.controller";

export const taskRouter = Router()

taskRouter.get('/', TaskController.getTasks)

taskRouter.put('/', TaskController.updateTask)

taskRouter.post('/', TaskController.createTask)

taskRouter.delete('/', TaskController.deleteTask)
