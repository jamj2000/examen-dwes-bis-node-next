import Image from "next/image"

// https://www.micasarevista.com/plantas-flores/g42345957/significado-flores-plantas/
function page() {
  return (
    <>
      <h1> Pokemon - Charmander</h1>

      <img className='pokemon'
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
      />
        <p>Charmander  (ヒトカゲ Hitokage en japonés) es un Pokémon de tipo fuego introducido en la primera generación. Es uno de los tres Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región de Kanto, junto a Bulbasaur y Squirtle.</p>
      <small>Este contenido proviene de wikidex.net, y debe darse atribución a sus autores, tal como especifica la licencia.
        Se prohíbe su uso a PlagioDex (el wiki de FANDOOM), por copiar reiteradamente sin dar atribución</small>
     </>
  )
}

export default page