const express = require('express')

const todosRoutes = express.Router()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

//CRUD PRIMEIRO GIRO
//CRUD PRIMEIRO GIRO
//CRUD PRIMEIRO GIRO
//CRUD PRIMEIRO GIRO

//Create
todosRoutes.post('/PrimeiroGiro', async (req, res) => {
    const { pGiro } = req.body
    const todoGiro = await prisma.primeiroGiro.create({
        data: {
            pGiro 
        },
    })
    return res.json(todoGiro)
})

//Read
todosRoutes.get('/PrimeiroGiro', async (req, res) => {
    const todosGiros = await prisma.primeiroGiro.findMany()
    return res.json(todosGiros)
})

//Update
todosRoutes.put('/PrimeiroGiro', async (req, res) => {
    const { pGiro, id } = req.body
    const intId = parseInt(id)

    if(!intId){
        return res.json("Id é obrigatório!")
    }

    const idAlreadyExist = await prisma.primeiroGiro.findUnique({ 
        where: {
            id: intId
        } 
    })

    if(!idAlreadyExist){
        return res.json('Id não existe')
    }

    const todoGiro = await prisma.primeiroGiro.update({ 
    where: {
        id: intId,
    },
    data: {
        pGiro
    }
    })
    return res.json(todoGiro)
})

//Delete
todosRoutes.delete('/PrimeiroGiro/:id', async (req, res) => {
    const { id } = req.params
    const intId = parseInt(id)

    if(!intId){
        res.json('Id é obrigatório!')
    }

    const idAlreadyExist = await prisma.primeiroGiro.findUnique({ where: {id: intId} })

    if (!idAlreadyExist){
        return res.json('Id não existe')
    }
    
    await prisma.primeiroGiro.delete({ where: {id: intId} })
    return res.json('Giro deletado')
})





//CRUD SEGUNDO GIRO
//CRUD SEGUNDO GIRO
//CRUD SEGUNDO GIRO
//CRUD SEGUNDO GIRO

//Create
todosRoutes.post('/SegundoGiro', async (req, res) => {
    const { sGiro } = req.body
    const todoGiro = await prisma.segundoGiro.create({
        data: {
            sGiro 
        },
    })
    return res.json(todoGiro)
})

//Read
todosRoutes.get('/SegundoGiro', async (req, res) => {
    const todosGiros = await prisma.segundoGiro.findMany()
    return res.json(todosGiros)
})


//Update
todosRoutes.put('/SegundoGiro', async (req, res) => {
    const { sGiro, id } = req.body
    const intId = parseInt(id)

    if(!intId){
        return res.json("Id é obrigatório!")
    }

    const idAlreadyExist = await prisma.segundoGiro.findUnique({ 
        where: {
            id: intId
        } 
    })

    if(!idAlreadyExist){
        return res.json('Id não existe')
    }

    const todoGiro = await prisma.segundoGiro.update({ 
    where: {
        id: intId,
    },
    data: {
        sGiro
    }
    })
    return res.json(todoGiro)
})

//Delete
todosRoutes.delete('/SegundoGiro/:id', async (req, res) => {
    const { id } = req.params
    const intId = parseInt(id)

    if(!intId){
        res.json('Id é obrigatório!')
    }

    const idAlreadyExist = await prisma.segundoGiro.findUnique({ where: {id: intId} })

    if (!idAlreadyExist){
        return res.json('Id não existe')
    }
    
    await prisma.segundoGiro.delete({ where: {id: intId} })
    return res.json('Giro deletado')
})
module.exports = todosRoutes