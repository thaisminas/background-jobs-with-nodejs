import 'dotenv/config'
import express from 'express'
import useController from "./app/Controller/useController";
import UseController from "./app/Controller/useController";
import createBullBoard from 'bull-board'
import Queue from "./app/lib/queue";
import queue from "./app/lib/queue";

const app = express()

BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

app.use(express.json())

app.post('/users', UseController.store)

app.listen(process.env.PORT, ()=> {
    console.log(`Server running on the ${process.env.PORT}`)
})
