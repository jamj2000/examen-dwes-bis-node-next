import Image from "next/image"

// https://www.micasarevista.com/plantas-flores/g42345957/significado-flores-plantas/
function page() {
  return (
    <>
      <h1> Pokemon - Venusaur</h1>

      <img className='pokemon'
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
      />
      <p>Venusaur  (フシギバナ Fushigibana en japonés) es un Pokémon de tipo planta/veneno introducido en la primera generación. Es la evolución de Ivysaur.</p>
      <small>Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia.
        Se prohíbe su uso a PlagioDex (el wiki de FANDOOM), por copiar reiteradamente sin dar atribución</small>
 
    </>
  )
}

export default page