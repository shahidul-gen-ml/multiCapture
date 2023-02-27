const express = require('express');
const app = express();
const port = 5000;
const { EventEmitter } = require('events');
const cors = require('cors');

const eventEmitter = new EventEmitter();
app.use(cors());

app.use(express.json());

app.post('/capture-video', (req, res) => {
    // Add code here to capture video
    console.log('Video captured!');
    eventEmitter.emit('videoCaptured');
    res.send('Video captured!');
});

const server = app.listen(port, () => {
    console.log(`Webhook server listening at http://localhost:${port}`);
});

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

eventEmitter.on('videoCaptured', () => {
    io.emit('videoCaptured');
});
