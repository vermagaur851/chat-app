import http from 'http'
import app from './app.js'
import {Server} from 'socket.io'

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: process.env.ORIGIN,
    }
})

io.on('connection',(socket)=>{
    socket.on('chat',(payload)=>{
        console.log("What is payload : ",payload);
        io.emit('chat',payload)
    })
})

server.listen(process.env.PORT,()=>{
    console.log(`App is listening at port: ${process.env.PORT}`);
})
