const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Very hello again, world!'))

app.listen(port, () => console.log(`Listening on port ${port}`))