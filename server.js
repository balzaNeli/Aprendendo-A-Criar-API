import express, { request } from 'express'

const app = express()
app.use(express.json())


app.post('/usuarios', (request, response) => {


    users.push(request.body)

    
    response.status(201).json(request.body)
})


app.get('/usuarios', (request, response) => {
    response.status(200).json(users)
})


app.listen(3000)