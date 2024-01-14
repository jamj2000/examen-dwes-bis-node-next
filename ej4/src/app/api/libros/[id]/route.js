import getLibros from "@/lib/libros";

export function GET(request, { params }) {
    let libros = getLibros();
    let libro = libros.find(libro => libro.id == params.id)

    return Response.json(libro)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let libros = getLibros();
    // Obtenemos posición    
    const pos = libros.findIndex(libro => libro.id == params.id)

    // Modificamos libro
    const libroNuevo = await request.json()
    libroNuevo.info.paginas = Number(libroNuevo.info?.paginas)
    libroNuevo.info.ediciones = libroNuevo.info?.ediciones?.map (edicion => Number(edicion)) 
    libros.splice(pos, 1, { id: Number(params.id), ...libroNuevo })

    return Response.json(libros)
}


export function DELETE(request, { params }) {
    let libros = getLibros();
    // Obtenemos posición    
    const pos = libros.findIndex(libro => libro.id == Number(params.id))

    // Eliminamos libro
    if (pos != -1)  // Si es encontrado
        libros.splice(pos, 1)

    return Response.json(libros)
}