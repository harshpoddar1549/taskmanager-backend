import express from 'express'
import dotenv from 'dotenv'
import { connectToDb } from './middlewares/connectToDb'
import { reqLogger } from './middlewares/reqLogger'
import { taskRouter } from './routes/task.routes'

// express Server
const app = express()

// dot env config
dotenv.config()

// parse req body
app.use(express.json())

// connecting to the db and listening at port 5001
connectToDb().then(() => {
    app.listen(process.env.PORT, ()=> console.log(`[INFO] Server listening on port ${process.env.PORT}`))
}).catch((err) => {
    console.log(err)
    process.exit(1)
})

app.use(reqLogger)

app.use('/api/tasks', taskRouter)

