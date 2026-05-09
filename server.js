import express from 'express'
import cors from 'cors'
import "dotenv/config";
import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/usuarios', async (request, response) => {
    try {
        const user = await prisma.user.create({  
            data: {
                email: request.body.email,
                name: request.body.name,
                age: request.body.age
            }
        })
        response.status(201).json(user)
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
})

app.get('/usuarios', async (request, response) => {
    try {
        let users = []
        if(request.query){
            users = await prisma.user.findMany({
                where: {
                    name: request.query.name,
                    email: request.query.email,
                    age: request.query.age,
                    id: request.query.id

                }
            })
        }else{
           users = await prisma.user.findMany() 
        }
        
        response.status(200).json(users)
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
})
app.put('/usuarios/:id', async (request, response) => {
    try {
        const user = await prisma.user.update({
            where: { id: request.params.id },
            data: {
                email: request.body.email,
                name: request.body.name,
                age: request.body.age
            }
        })
        response.status(200).json(user)
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
})

app.delete('/usuarios/:id', async (request, response) => {
    try {
        await prisma.user.delete({
            where: { id: request.params.id }
        })
        response.status(200).json({ message: "Usuário deletado com sucesso!" })
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
})
app.listen(process.env.PORT || 3000)