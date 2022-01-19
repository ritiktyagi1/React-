const connectedToMongo = require('./db');
const express = require('express')

connectedToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Ritik!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})