import express from 'express'

const app = express

app.get('/', (request, response) => {
    response.send(pagInicio)
})


app.post('/', (request, response) => {
    response.send(pagInicio)
})


app.get('/', (request, response) => {
    response.send(pagInicio)
})



app.update('/', (request, response) => {
    response.send(pagInicio)
})


app.delete('/', (request, response) => {
    response.send(pagInicio)
})


app.listen(3000, () => console.log('Aplicación iniciada en http://localhost:3000'))
