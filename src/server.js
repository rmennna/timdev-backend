const express = require('express');
const mongoose = require('mongoose')

const routes = require('./routes')
const cors = require('cors')

const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
    console.log('Nova Conexão', socket.id);

})

mongoose.connect('mongodb+srv://menna:menna@cluster0-lhcq2.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes)

server.listen(3333);