const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server)

app.use(cors())
mongoose.connect('mongodb://lucasamaral:swordfish7@ds257054.mlab.com:57054/curso', {useNewUrlParser: true, useUnifiedTopology: true })


//o arquivo de Routes deve vir depois 
app.use(express.json());
app.use(routes);


app.listen(3333)
