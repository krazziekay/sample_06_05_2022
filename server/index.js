const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    status: 200,
    message: "Server is active!" 
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})