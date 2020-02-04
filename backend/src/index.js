const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express();
app.use(cors())
mongoose.connect('mongodb://lucasamaral:swordfish7@ds257054.mlab.com:57054/curso', {useNewUrlParser: true, useUnifiedTopology: true })


//o arquivo de Routes deve vir depois 
app.use(express.json());
app.use(routes);


app.listen(3333)
