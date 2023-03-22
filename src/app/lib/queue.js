import Queue from 'bull'
import redis from "../config/redis";
import * as jobs from '../jobs'

let job;
const queues = Object.values(jobs).map( job = ({
    bull: new Queue(jobs.key, redis),
    name: job.key,
    handle: job.handle,
    options: job.options
}))

export default {
    queues,
    add(name, data){
        const queue = this.queues.find(queue => queue.name === name)
        return queue.bull.add(data, queue.options)
    },

    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle)

            queue.bull.on('failed', (jobs, err) => {
                console.log('Job failed', queue.key, jobs.data);
                console.log(err)
            })
        })
    }
}
