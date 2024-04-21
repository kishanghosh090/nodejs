const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('its about section')
  })
app.get('/more', (req, res) => {
    res.send('hi,,this is akash ghosh!')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})