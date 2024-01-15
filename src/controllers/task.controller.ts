import { Request, Response } from "express"
import { TaskService } from "../services/task.service"

export const TaskController = {
    getTasks: async (req:Request, res:Response) => {
        try{
            const tasks = await TaskService.getTasks()
            res.status(200).json(tasks)
        }catch(err){
            console.log(err)
            res.status(400).json(err)
        }
    },
    updateTask: async (req:Request, res:Response) => {
        const taskId = <string>req.query.taskId // typecasting like this  or like 
        const update = req.body
        // const taskId = req.query.taskId as string
        if(taskId && typeof taskId === 'string' && Object.keys(req.body).length !== 0){
            try{
                const updatedTask = await TaskService.updateTask(taskId, update)
                res.status(200).json(updatedTask)
            }catch(err){
                console.log(err)
                res.status(400).json(err)
            }
        }else{
            res.status(400).json({
                message: "Missing query parameter taskId"
            })
        }
    },
    createTask: async (req:Request, res:Response) => {
        if(Object.keys(req.body).length!==0){
            try{
                const taskId = await TaskService.createTask(req.body)
                res.status(200).json({taskId: taskId})
            }catch(err){
                console.log(err)
                res.status(400).json(err)
            }    
        }else{
            res.status(400).json({
                message: "missing body"
            })
        }
    },
    deleteTask: async (req:Request, res:Response) => {
        const taskId = req.query.taskId as string
        if(taskId){
            try{
                const deletedTask = await TaskService.deleteTask(taskId)
                res.status(200).json(deletedTask)
            }catch(err){
                console.log(err)
                res.status(400).send(err)
            }          
        }else{
            res.status(400).json({
                message: "Missing query parameter taskId"
            })
        }
    }
}