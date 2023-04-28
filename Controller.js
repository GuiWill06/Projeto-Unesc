const express = require('express')
const todosRoutes = require('./src/routes/routes')

const app = express()

app.use(express.json())
app.use(todosRoutes)


app.get('/PrimeiroGiro', (req, res) =>{
    return res.json('Up')
})

app.get('/SegundoGiro', (req, res) =>{
    return res.json('Up')
})


app.listen(3000, (console.log('Server up in 3000')))