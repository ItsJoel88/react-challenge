if (process.env.NODE_ENV) require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const mongoose = require('./config/mongoose')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
mongoose()

app.use('/', routes)

app.use(errorHandler)



app.listen(PORT, () => console.log(`Server running at port ${PORT}`))