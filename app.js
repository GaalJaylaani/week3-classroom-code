const express = require('express')
const app = express()
const port = 3000
const carData = require('./cars.json')

// Run with 'node app.js'
// See output with curl (in new terminal tab) or browser at http://localhost:3000/
app.get('/', (req, res) => {
  res.send(carData[0])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})