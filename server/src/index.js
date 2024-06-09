const express = require('express')
const cors = require("cors")
require('dotenv').config()

const routeNotes = require('./routes/notes')

const app = express()


app.use(cors())
app.use(express.json())

app.use('/notes', routeNotes)

app.listen(process.env.APP_PORT, () => {
    console.log(`server running on port ${process.env.APP_PORT}`)
})