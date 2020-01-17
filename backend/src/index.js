const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://lukasconka:5Csl3dVcgnatKcqY@cluster0-svoda.mongodb.net/week10?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
//o arquivo de Routes deve vir depois 
app.use(express.json());
app.use(routes);


app.listen(3333)
