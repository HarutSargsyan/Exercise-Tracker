const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const url = process.env.CLUSTER_URL
const usersRouter = require('./routes/users')
const exrecisesRouter = require('./routes/exercises')

app.use(cors())
app.use(express.json())

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true,  useCreateIndex:true})
    .then(() => console.log('MongoDB is connected ...'))
    .catch((err) => console.log(err))

const port = process.env.PORT || 5000

app.use('/users',usersRouter)
app.use('/exercises',exrecisesRouter)


app.listen(port, () => console.log(`server is running on ${port} ...`))