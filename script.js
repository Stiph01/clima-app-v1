const claveApi = "9b1fbb4e6a3941b294945058250904"
const idioma = "es"
const inpCiudad = document.getElementById('input-ciudad')

async function obtenerClima(){
    const ciudad = inpCiudad.value;
    if(!ciudad){
        alert('Por favor, ingresar una ciudad')
        return
    }

    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
    const response = await fetch(apiClimaActual)
    const data = await response.json(response)
    mostrarClima(data)
}

function mostrarClima (data){
    inpCiudad.value = ""
    document.querySelector(".img-clima").src = data.current.condition.icon;
    document.querySelector(".txt-clima").innerHTML = data.current.condition.text;
    document.querySelector(".grado-clima").innerHTML = data.current.temp_c + '°C';
    document.querySelector(".ciudad-clima").innerHTML = data.location.name;
    document.querySelector(".humedad-clima").innerHTML = data.current.humidity + '%';
    document.querySelector(".viento-clima").innerHTML = data.current.wind_kph + ' km/h';
    document.querySelector(".hour-app").innerHTML = data.location.localtime;
}