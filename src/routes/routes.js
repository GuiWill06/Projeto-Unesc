const express = require('express')

const todosRoutes = express.Router()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

todosRoutes.post('/PrimeiroGiro', async (req, res) => {
    const { primeiroGiro } = req.body
    const primeirosGirosCriados = await prisma.primeirosGirosCriados.create({
        data: {
            primeiroGiro
        },
    })
    return res.json(primeirosGirosCriados)
})

todosRoutes.get('/PrimeiroGiro', async (req, res) => {
    const todosGiros = await prisma.primeirosGirosCriados.findMany()
    return res.json(todosGiros)
})

module.exports = todosRoutes