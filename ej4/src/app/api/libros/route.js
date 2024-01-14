import getLibros from "@/lib/libros";

export function GET() {
    let libros = getLibros();
    return Response.json(libros)
}


export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let libros = getLibros();
    let sig = Math.max(...libros.map(libro => libro.id)) + 1

    const libroNuevo = await request.json()
    libroNuevo.info.paginas = Number(libroNuevo.info?.paginas)
    libroNuevo.info.ediciones = libroNuevo.info?.ediciones?.map (edicion => Number(edicion)) 

    libros.push({ id: sig, ...libroNuevo })
    return Response.json(libros)
}

