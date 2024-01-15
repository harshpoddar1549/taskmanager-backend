import taskModel from "../models/task.model"

type typeTask = {
    taskTitle:string
    taskDescription:string
    status:string
}

export const TaskService = {
    getTasks: async () => {
        const task = await taskModel.find({})
        return task
    },
    createTask: async (newTask:typeTask) => {
        const newCreatedTask = await taskModel.create({...newTask})
        return newCreatedTask._id
    },

    // findOneAndUpdate -> finds the first document on the basis of the given filter
    // and updates it.
    // By Default, it returns the document before getting updated.
    // To return updated document, set options new: true 
    // findOneAndUpdate([filter], [update], [options])
    updateTask:async (taskId:string ,update:typeTask) => {
        const updatedTask = await taskModel.findByIdAndUpdate(taskId, update, { new: true })
        //console.log(updatedTask)
        return updatedTask
    },
    deleteTask:async (taskId:string) => {
        const deletedTask = taskModel.findByIdAndDelete(taskId)
        //console.log(deletedTask)
        return deletedTask
    }
}