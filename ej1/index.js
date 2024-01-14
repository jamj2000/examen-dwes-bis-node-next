// DWES - Ejercicio: Consumir API de Pokemon (Personajes)
// Máx personajes: 1000
import express from 'express'

const app = express()

app.use(express.urlencoded());  // IMPORTANTE

const cabecera = `
<h1>Personajes de Pokemon</h1>

<form action='/' method='post'>
  <label for="num">Personaje </label><span id="num"></span><br/>
  <input type="range" id="personajeId" name="personajeId" min="1" max="1000" /><br/>
  <input type="submit" id="submit" value="Consultar" />
</form>
<div id="resultado"></div>
<hr>

<script>
    const value = document.querySelector("#num");
    const input = document.querySelector("#personajeId");
    const resultado = document.querySelector("#resultado");
       
    input.addEventListener("input", (event) => {
        value.innerHTML = event.target.value;
    });
    
    /* 
     ACTUALIZACIÓN DE INFORMACIÓN EN EL LADO CLIENTE
     Usando fetch desde el lado cliente
    */

    // window.onload = () => document.getElementById('submit').style.display = "none"    
    
    // input.addEventListener("change", async (event) => {
    //    const personaje = await getPersonaje (event.target.value);
    //    resultado.innerHTML  =  "<hr>"
    //    resultado.innerHTML +=  "<h2>Datos del personaje " + personaje.id + " </h2>"
    //    resultado.innerHTML +=  "<p>Nombre: <strong>" + personaje.name + "</strong></p>"
    //    resultado.innerHTML +=  "<p>Imágen: </p>"
    //    resultado.innerHTML +=  "<img src=" + personaje.sprites.other['official-artwork']['front_default'] + " />"
    // });
   
    async function getPersonaje() {
       const res  = await fetch ('https://pokeapi.co/api/v2/pokemon/' + value.innerHTML)
       const data = await res.json()
       console.log({data})
       return data
    }

</script>
`

const pagInicio = `
    ${cabecera}
`
// const personaje = null;

function pagPersonaje (personaje) {
    return `
    ${cabecera}
    <h2>Datos del personaje ${personaje.id}</h2>
    <p>Nombre: <strong>${personaje.name}</strong></p>
    <p>Imágen: </p>
    <img src="${personaje.sprites.other['official-artwork']['front_default']}" />
`
}

app.get('/', (request, response) => {
    response.send(pagInicio)
})

app.post('/', async (request, response) => {
    async function getPersonaje() {
       const res  = await fetch ('https://pokeapi.co/api/v2/pokemon/' + request.body.personajeId)
       const data = await res.json()
       return data
    }
    const personaje = await getPersonaje();
    response.send(pagPersonaje(personaje))
})


app.listen(3000, () => console.log('Aplicación iniciada en http://localhost:3000'))
