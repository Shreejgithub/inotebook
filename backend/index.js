const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

app.use(express.json())  // This is middlewere we have to declare this to get response in json file

// Available routes
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})