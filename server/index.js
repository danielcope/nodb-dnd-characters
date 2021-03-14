const express = require('express')
const characters = require('./controllers/characters')
const app = express()

app.use(express.json())

app.get('/api/characters', characters.showChar)
app.post('/api/characters', characters.addNewChar)
app.put('/api/characters/:id', characters.editHp)
app.delete('/api/characters/:id', characters.deleteChar)


const port = 4321
app.listen(port,() => console.log(`Server running on port` + port))