const express = require('express')
const cors = require('cors')

//Create an app
const app = express()
app.use(cors({ origin: true, credentials: true }))

//Routes
app.get('/', (req, res) => {
  res.json({ response: 'Hello World' })
})

//Listen port
const PORT = 5000
app.listen(PORT)
console.log(`Running on port ${PORT}`)
