let contenedorClima = document.querySelector('.contenedor-clima'),
    contenedorImagen = document.querySelector('.contenedor-imagen');

const searchClima = event => {
    event.preventDefault();
    const { value } = event.target.weather;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value.toLowerCase()}&appid=fffc25dd0555327e5a0644d3cbc1749c`)
    .then(data => data.json())
    .then(response => renderClimaData(response))
}

const renderClimaData = data => {
    console.log(data)

    contenedorClima.style.display = "flex";

    /* Creando los elementos del Dom */
    const card = document.createElement('div'),
          name = document.createElement('h2'),
          sensacionTermica = document.createElement('p'),
          humedad = document.createElement('p'),
          presion = document.createElement('p'),
          clima = document.createElement('p'),
          climaMax = document.createElement('p'),
          climaMin = document.createElement('p');


    /*Creando las clases de los elementos del DOM  */
    card.classList.add('card')
    name.classList.add('titulo-pais')
    clima.classList.add('clima')
    climaMax.classList.add('climaMax')
    climaMin.classList.add('climaMin')
    humedad.classList.add('humedad')
    presion.classList.add('presion')
    sensacionTermica.classList.add('sensacionTermica')

    /* haciendo un appenchil para mostrar los elementos en la pagina */
    name.textContent = data.name
    clima.textContent = `Temperatura: ${(data.main.temp - 273.15).toFixed(1)} °C`
    sensacionTermica.textContent = `Sensacion Termica: ${(data.main.feels_like -273.15).toFixed(1)} °C`


    card.appendChild(sensacionTermica)
    
    contenedorImagen.appendChild(name)
    contenedorImagen.appendChild(clima)

    contenedorClima.appendChild(card)
} 





