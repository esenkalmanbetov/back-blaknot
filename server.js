const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())

const port = 3001

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({message: 'Welcome to Blaknot application'})
})

require("./app/routes/subject.routes.js")(app);

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})