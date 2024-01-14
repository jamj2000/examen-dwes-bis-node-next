import express from "express";
const app = express()


let libros = [
    {
        id: 1,
        titulo: "Harry Potter",
        autor: "J. K. Rowling",
        info: {
            editorial: "Oceano",
            paginas: 345,
            ediciones: [1997, 1998, 2000]
        }
    },
    {
        id: 2,
        titulo: "El Quijote",
        autor: "Cervantes",
        info: {
            editorial: "Hispania",
            paginas: 600,
            ediciones: [1605, 1660]
        }
    },
    {
        id: 3,
        titulo: "Tormetas",
        autor: "Sanderson",
        info: {
            editorial: "Paradise",
            paginas: 400,
            ediciones: [1998, 2002]
        }
    },
    {
        id: 4,
        titulo: "El rey de amarillo",
        autor: "H.P lovecraft",
        info: {
            editorial: "Paradise",
            paginas: 1000,
            ediciones: [1997, 2001]
        }
    }
];



app.use(express.json())  // IMPORTANTE

// GET
app.get('/api/libros', (request, response) => response.json(libros))

// POST 
app.post('/api/libros', (request, response) => {
    if (!request.is('json'))
        return response.json({ message: 'Debes proporcionar datos JSON' })

    let sig = Math.max(...libros.map(libro => libro.id)) + 1

    let { titulo, autor, info } = request.body
   
    info.paginas = Number(info?.paginas)
    info.ediciones = info?.ediciones?.map(edicion => Number(edicion));

    libros.push({ id: sig, titulo, autor, info })
    return response.json(libros)
})

// GET 
app.get('/api/libros/:id', (request, response) => {
    let libro = libros.find(libro => libro.id == request.params.id)

    if (libro !== undefined) { // Si es encontrado    
        return response.json(libro)
    } else {
        response.json({ message: 'El elemento no ha sido encontrado' })
    }
})

// PUT
app.put('/api/libros/:id', (request, response) => {
    if (!request.is('json'))
        return response.json({ message: 'Debes proporcionar datos JSON' })

    const { id } = request.params
    let   { titulo, autor, info } = request.body

    info.paginas = Number(info?.paginas)
    info.ediciones = info?.ediciones?.map(edicion => Number(edicion));

    // Obtenemos posición    
    const pos = libros.findIndex(libro => libro.id == id)

    if (pos != -1) { // Si es encontrado
        libros.splice(pos, 1, { id, titulo, autor, info })
        return response.json(libros)
    } else { // Sino
        response.json({ message: 'El elemento no ha sido encontrado' })
    }
})

// DELETE
app.delete('/api/libros/:id', (request, response) => {
    // Obtenemos posición    
    const pos = libros.findIndex(libro => libro.id == request.params.id)

    if (pos != -1) { // Si es encontrado
        libros.splice(pos, 1)
        return response.json(libros)
    } else { // Sino
        response.json({ message: 'El elemento no ha sido encontrado' })
    }
})


app.listen(3000)
