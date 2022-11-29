const express = require(`express`)
const app = express()
const route = require(`./routes/route`)
const bodyParser = require("body-parser")
const db = require('./db/db')
const cors = require('cors');
const path = require('path')
require("dotenv/config")

mongoDB = db.getDb(process.env.DB_CONNECT)

app.use(cors());
app.use(bodyParser.json())
app.use(express.json())
app.use("/pokemon",route)
app.use(express.static(path.join(__dirname, 'client/build')))


app.listen(process.env.PORT)