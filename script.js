const claveApi = "9b1fbb4e6a3941b294945058250904"
const idioma = "es"
const inpCiudad = document.getElementById('input-ciudad')

async function obtenerClima(){
    const ciudad = inpCiudad.value;
    if(!ciudad){
        alert('Por favor, ingresar una ciudad')
        return
    }

    const apiClimaActual = `http://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
    const response = await fetch(apiClimaActual)
    const data = await response.json(response)
    console.log(data)
}