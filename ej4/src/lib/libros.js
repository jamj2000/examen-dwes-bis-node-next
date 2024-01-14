let seed = [
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


let libros = null;

export default function getLibros() {

    // Sólo cargamos valores iniciales una sóla vez
    if (!libros) 
        libros = seed;
    
    return libros;
}

