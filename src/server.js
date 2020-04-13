const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Wow, very hello again, world!'))


console.log("Hello console world!")
app.listen(port, () => console.log(`Listening on port ${port}`))