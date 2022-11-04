let contenedorClima = document.querySelector('.contenedor-clima'),
    contenedorImagen = document.querySelector('.contenedor-imagen'),
    subtituloForecast = document.querySelector('.subtitulo'),
    contenedorClimaForecast = document.querySelector('.contenedor-clima__forecast');
    

const searchClima = event => {
    event.preventDefault();
    const { value } = event.target.weather;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value.toLowerCase()}&appid=fffc25dd0555327e5a0644d3cbc1749c`)
    .then(data => data.json())
    .then(response => renderClimaData(response))
}

const searchForecast = event => {
    event.preventDefault();
    const { value } = event.target.weather;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value.toLowerCase()}&appid=fffc25dd0555327e5a0644d3cbc1749c`)
    .then(informacion => informacion.json())
    .then(response => renderClimaInformacion(response))
}

const renderClimaData = data => {
    console.log(data)

    contenedorClima.style.display = "flex";

    const url = "http://openweathermap.org/img/w/";

    /* SECCION DE FECHA */
    const fecha = new Date(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    year = fecha.getFullYear();

    const contenedorFecha = document.createElement('div');
    const pDia = document.createElement('p');
    const pMes = document.createElement('p');
    const pYear = document.createElement('p');

    contenedorFecha.appendChild(pDia)
    contenedorFecha.appendChild(pMes)
    contenedorFecha.appendChild(pYear)

    /* Creacion de las clases */
    contenedorFecha.classList.add('contenedorFecha')
    pDia.classList.add('dia')
    pMes.classList.add('mes')
    pYear.classList.add('year')

    pDia.textContent = dia
    pMes.textContent = `/${mes + 1}`
    pYear.textContent = `/${year}`


    /* Creando los elementos del Dom */
    const card = document.createElement('div'),
          name = document.createElement('h2'),
          sensacionTermica = document.createElement('p'),
          humedad = document.createElement('p'),
          presion = document.createElement('p'),
          clima = document.createElement('p'),
          climaMax = document.createElement('p'),
          climaMin = document.createElement('p'),
          descripcion = document.createElement('p'),
          viento = document.createElement('p'),
          descripcion1 = document.createElement('p'),
          imagen1 = document.createElement('img');



    /*Creando las clases de los elementos del DOM  */
          card.classList.add('card')
          name.classList.add('titulo-pais')
          clima.classList.add('clima') 
          climaMax.classList.add('climaMax')
          climaMin.classList.add('climaMin')
          humedad.classList.add('humedad')
          presion.classList.add('presion')
          sensacionTermica.classList.add('sensacionTermica')
          descripcion.classList.add('descripcion-clima')
          viento.classList.add('viento')
          descripcion1.classList.add('descripcion1')
          imagen1.classList.add('imagen1')

    /* haciendo un appenchil para mostrar los elementos en la pagina */
    name.textContent = data.name
    clima.textContent = `Temperatura: ${(data.main.temp - 273.15).toFixed(1)}°C`
    sensacionTermica.textContent = `Sensacion Termica: ${(data.main.feels_like -273.15).toFixed(1)} °C`
    climaMax.textContent = `Temperatura Max: ${(data.main.temp_max - 273.15).toFixed(1)} °C`
    climaMin.textContent = `Temperatura Min: ${(data.main.temp_min -273.15).toFixed(1)} °C`
    humedad.textContent = `Humedad: ${data.main.humidity} %`
    presion.textContent = `Presion: ${data.main.pressure}hPa` 
    viento.textContent = `Velocidad del viento: ${data.wind.speed} m/s`
    descripcion1.textContent = `Descripcion: ${data.weather[0].description}`
    imagen1.src = url + data.weather[0].icon + '.png';

    card.appendChild(sensacionTermica)
    card.appendChild(climaMax)
    card.appendChild(climaMin)
    card.appendChild(humedad)
    card.appendChild(presion)
    card.appendChild(viento)
    
    contenedorImagen.appendChild(name)
    contenedorImagen.appendChild(contenedorFecha)
    contenedorImagen.appendChild(clima)
    contenedorImagen.appendChild(descripcion1)
    contenedorImagen.appendChild(imagen1)
    

    contenedorClima.appendChild(card)
} 

const renderClimaInformacion = informacion => {
    console.log(informacion)

    contenedorClimaForecast.style.display = "flex";
    subtituloForecast.style.display = "block";

    const url1 = "http://openweathermap.org/img/w/";

    /* Creando los elementos del Dom para el forecast */
    const cardForecastOne = document.createElement('div'),
          cardForecastTwo = document.createElement('div'),
          cardForecastThree = document.createElement('div'),
          cardForecastFour = document.createElement('div'),
          cardForecastFive = document.createElement('div'),
          cardForecastSix = document.createElement('div'),
          cardForecastSeven = document.createElement('div'),
          cardForecastEight = document.createElement('div'),
          horaClima = document.createElement('p'),
          sensacionTermicaForecast = document.createElement('p'),
          humedad = document.createElement('p'),
          presion = document.createElement('p'),
          clima = document.createElement('p'),
          descripcion = document.createElement('p'),
          viento = document.createElement('p'),
          imagenForecast = document.createElement('img');

        /*CREANDO LAS CLASES A LOS ELEMENTOS  */
          cardForecastOne.classList.add('cardForecast')
          cardForecastTwo.classList.add('cardForecast')
          cardForecastThree.classList.add('cardForecast')
          cardForecastFour.classList.add('cardForecast')
          cardForecastFive.classList.add('cardForecast')
          cardForecastSix.classList.add('cardForecast')
          cardForecastSeven.classList.add('cardForecast')
          cardForecastEight.classList.add('cardForecast')
          horaClima.classList.add('horaClima')
          clima.classList.add('climaForecast') 
          humedad.classList.add('humedadForecast')
          presion.classList.add('presionForecast')
          sensacionTermicaForecast.classList.add('sensacionTermicaForecast')
          descripcion.classList.add('descripcion-climaForecast')
          viento.classList.add('vientoForecast')
          imagenForecast.classList.add('imagenForecast')


          /* ANIDANDO LA INFORMACION DE LA BASE DE DATOS A LA PAGINA Y A LOS ELEMENTOS */
           horaClima.textContent = `Horario: ${informacion.list[0].dt_txt}`
           clima.textContent = `Temperatura: ${(informacion.list[0].main.temp - 273.15).toFixed(1)}°C`
           humedad.textContent = `Humedad: ${informacion.list[0].main.humidity} %`
           presion.textContent = `Presion: ${informacion.list[0].main.pressure}hPa`
           viento.textContent = `Viento: ${informacion.list[0].wind.speed} m/s`
           sensacionTermicaForecast.textContent = `Sensacion Termica: ${(informacion.list[0].main.feels_like - 273.15).toFixed(1)}°C`
           descripcion.textContent = `Descripcion: ${informacion.list[0].weather[0].description}`
           imagenForecast.src = url1 + informacion.list[0].weather[0].icon + '.png';


           /* AppenChil a la primera Card del Forecast */
            cardForecastOne.appendChild(horaClima)
            cardForecastOne.appendChild(clima)
            cardForecastOne.appendChild(humedad)
            cardForecastOne.appendChild(presion)
            cardForecastOne.appendChild(viento)
            cardForecastOne.appendChild(sensacionTermicaForecast)
            cardForecastOne.appendChild(descripcion)
            cardForecastOne.appendChild(imagenForecast)


            /* ------------------------------------------- */
            /* SEGUNDA SECCION DE LAS PREDICCIONES         */
            /* ------------------------------------------- */

            const horaClima1 = document.createElement('p'),
            sensacionTermicaForecast1 = document.createElement('p'),
            humedad1 = document.createElement('p'),
            presion1 = document.createElement('p'),
            clima1 = document.createElement('p'),
            descripcion1 = document.createElement('p'),
            viento1 = document.createElement('p'),
            imagenForecast1 = document.createElement('img');

            /*CREANDO LAS CLASES A LOS ELEMENTOS  */
            horaClima1.classList.add('horaClima')
            clima1.classList.add('climaForecast') 
            humedad1.classList.add('humedadForecast')
            presion1.classList.add('presionForecast')
            sensacionTermicaForecast1.classList.add('sensacionTermicaForecast')
            descripcion1.classList.add('descripcion-climaForecast')
            viento1.classList.add('vientoForecast')
            imagenForecast1.classList.add('imagenForecast')

            /* ANIDANDO LA INFORMACION DE LA BASE DE DATOS A LA PAGINA Y A LOS ELEMENTOS */
             
            horaClima1.textContent = `Horario: ${informacion.list[1].dt_txt}`
            clima1.textContent = `Temperatura: ${(informacion.list[1].main.temp - 273.15).toFixed(1)}°C`
            humedad1.textContent = `Humedad: ${informacion.list[1].main.humidity} %`
            presion1.textContent = `Presion: ${informacion.list[1].main.pressure} hPa`
            viento1.textContent = `Viento: ${informacion.list[1].wind.speed} m/s`
            sensacionTermicaForecast1.textContent = `Sensacion Termica: ${(informacion.list[1].main.feels_like - 273.15).toFixed(1)}°C`
            descripcion1.textContent = `Descripcion: ${informacion.list[1].weather[0].description}`
            imagenForecast1.src = url1 + informacion.list[1].weather[0].icon + '.png';

           /* AppenChil a la segunda Card del Forecast */
            cardForecastTwo.appendChild(horaClima1)
            cardForecastTwo.appendChild(clima1)
            cardForecastTwo.appendChild(humedad1)
            cardForecastTwo.appendChild(presion1)
            cardForecastTwo.appendChild(viento1)
            cardForecastTwo.appendChild(sensacionTermicaForecast1)
            cardForecastTwo.appendChild(descripcion1)
            cardForecastTwo.appendChild(imagenForecast1)

            /* ------------------------------------------- */
            /* TERCERA  SECCION DE LAS PREDICCIONES         */
            /* ------------------------------------------- */

            const horaClima2 = document.createElement('p'),
            sensacionTermicaForecast2 = document.createElement('p'),
            humedad2 = document.createElement('p'),
            presion2 = document.createElement('p'),
            clima2 = document.createElement('p'),
            descripcion2 = document.createElement('p'),
            viento2 = document.createElement('p'),
            imagenForecast2 = document.createElement('img');

            /*CREANDO LAS CLASES A LOS ELEMENTOS  */
            horaClima2.classList.add('horaClima')
            clima2.classList.add('climaForecast') 
            humedad2.classList.add('humedadForecast')
            presion2.classList.add('presionForecast')
            sensacionTermicaForecast2.classList.add('sensacionTermicaForecast')
            descripcion2.classList.add('descripcion-climaForecast')
            viento2.classList.add('vientoForecast')
            imagenForecast2.classList.add('imagenForecast')

            /* ANIDANDO LA INFORMACION DE LA BASE DE DATOS A LA PAGINA Y A LOS ELEMENTOS */
             
            horaClima2.textContent = `Horario: ${informacion.list[2].dt_txt}`
            clima2.textContent = `Temperatura: ${(informacion.list[2].main.temp - 273.15).toFixed(1)}°C`
            humedad2.textContent = `Humedad: ${informacion.list[2].main.humidity} %`
            presion2.textContent = `Presion: ${informacion.list[2].main.pressure} hPa`
            viento2.textContent = `Viento: ${informacion.list[2].wind.speed} m/s`
            sensacionTermicaForecast2.textContent = `Sensacion Termica: ${(informacion.list[2].main.feels_like - 273.15).toFixed(1)}°C`
            descripcion2.textContent = `Descripcion: ${informacion.list[2].weather[0].description}`
            imagenForecast2.src = url1 + informacion.list[2].weather[0].icon + '.png';

           /* AppenChil a la segunda Card del Forecast */

            cardForecastThree.appendChild(horaClima2)
            cardForecastThree.appendChild(clima2)
            cardForecastThree.appendChild(humedad2)
            cardForecastThree.appendChild(presion2)
            cardForecastThree.appendChild(viento2)
            cardForecastThree.appendChild(sensacionTermicaForecast2)
            cardForecastThree.appendChild(descripcion2)
            cardForecastThree.appendChild(imagenForecast2)

            /* ------------------------------------------- */
            /* CUARTA  SECCION DE LAS PREDICCIONES         */
            /* ------------------------------------------- */

            const horaClima3 = document.createElement('p'),
            sensacionTermicaForecast3 = document.createElement('p'),
            humedad3 = document.createElement('p'),
            presion3 = document.createElement('p'),
            clima3 = document.createElement('p'),
            descripcion3 = document.createElement('p'),
            viento3 = document.createElement('p'),
            imagenForecast3 = document.createElement('img');

            /*CREANDO LAS CLASES A LOS ELEMENTOS  */
            horaClima3.classList.add('horaClima')
            clima3.classList.add('climaForecast') 
            humedad3.classList.add('humedadForecast')
            presion3.classList.add('presionForecast')
            sensacionTermicaForecast3.classList.add('sensacionTermicaForecast')
            descripcion3.classList.add('descripcion-climaForecast')
            viento3.classList.add('vientoForecast')
            imagenForecast3.classList.add('imagenForecast')

            /* ANIDANDO LA INFORMACION DE LA BASE DE DATOS A LA PAGINA Y A LOS ELEMENTOS */
             
            horaClima3.textContent = `Horario: ${informacion.list[3].dt_txt}`
            clima3.textContent = `Temperatura: ${(informacion.list[3].main.temp - 273.15).toFixed(1)}°C`
            humedad3.textContent = `Humedad: ${informacion.list[3].main.humidity} %`
            presion3.textContent = `Presion: ${informacion.list[3].main.pressure} hPa`
            viento3.textContent = `Viento: ${informacion.list[3].wind.speed} m/s`
            sensacionTermicaForecast3.textContent = `Sensacion Termica: ${(informacion.list[3].main.feels_like - 273.15).toFixed(1)}°C`
            descripcion3.textContent = `Descripcion: ${informacion.list[3].weather[0].description}`
            imagenForecast3.src = url1 + informacion.list[3].weather[0].icon + '.png';

           /* AppenChil a la segunda Card del Forecast */
           
            cardForecastFour.appendChild(horaClima3)
            cardForecastFour.appendChild(clima3)
            cardForecastFour.appendChild(humedad3)
            cardForecastFour.appendChild(presion3)
            cardForecastFour.appendChild(viento3)
            cardForecastFour.appendChild(sensacionTermicaForecast3)
            cardForecastFour.appendChild(descripcion3)
            cardForecastFour.appendChild(imagenForecast3)

            /* ------------------------------------------- */
            /* Quinta SECCION DE LAS PREDICCIONES         */
            /* ------------------------------------------- */

            const horaClima4 = document.createElement('p'),
            sensacionTermicaForecast4 = document.createElement('p'),
            humedad4 = document.createElement('p'),
            presion4 = document.createElement('p'),
            clima4 = document.createElement('p'),
            descripcion4 = document.createElement('p'),
            viento4 = document.createElement('p'),
            imagenForecast4 = document.createElement('img');

            /*CREANDO LAS CLASES A LOS ELEMENTOS  */
            horaClima4.classList.add('horaClima')
            clima4.classList.add('climaForecast') 
            humedad4.classList.add('humedadForecast')
            presion4.classList.add('presionForecast')
            sensacionTermicaForecast4.classList.add('sensacionTermicaForecast')
            descripcion4.classList.add('descripcion-climaForecast')
            viento4.classList.add('vientoForecast')
            imagenForecast4.classList.add('imagenForecast')

            /* ANIDANDO LA INFORMACION DE LA BASE DE DATOS A LA PAGINA Y A LOS ELEMENTOS */
             
            horaClima4.textContent = `Horario: ${informacion.list[4].dt_txt}`
            clima4.textContent = `Temperatura: ${(informacion.list[4].main.temp - 273.15).toFixed(1)}°C`
            humedad4.textContent = `Humedad: ${informacion.list[4].main.humidity} %`
            presion4.textContent = `Presion: ${informacion.list[4].main.pressure} hPa`
            viento4.textContent = `Viento: ${informacion.list[4].wind.speed} m/s`
            sensacionTermicaForecast4.textContent = `Sensacion Termica: ${(informacion.list[4].main.feels_like - 273.15).toFixed(1)}°C`
            descripcion4.textContent = `Descripcion: ${informacion.list[4].weather[0].description}`
            imagenForecast4.src = url1 + informacion.list[4].weather[0].icon + '.png';

           /* AppenChil a la segunda Card del Forecast */
           
            cardForecastFive.appendChild(horaClima4)
            cardForecastFive.appendChild(clima4)
            cardForecastFive.appendChild(humedad4)
            cardForecastFive.appendChild(presion4)
            cardForecastFive.appendChild(viento4)
            cardForecastFive.appendChild(sensacionTermicaForecast4)
            cardForecastFive.appendChild(descripcion4)
            cardForecastFive.appendChild(imagenForecast4)

            /* ------------------------------------------- */
            /* SEXTASECCION DE LAS PREDICCIONES         */
            /* ------------------------------------------- */

            const horaClima5 = document.createElement('p'),
            sensacionTermicaForecast5 = document.createElement('p'),
            humedad5 = document.createElement('p'),
            presion5 = document.createElement('p'),
            clima5 = document.createElement('p'),
            descripcion5 = document.createElement('p'),
            viento5 = document.createElement('p'),
            imagenForecast5 = document.createElement('img');

            /*CREANDO LAS CLASES A LOS ELEMENTOS  */
            horaClima5.classList.add('horaClima')
            clima5.classList.add('climaForecast')
            humedad5.classList.add('humedadForecast')
            presion5.classList.add('presionForecast')
            sensacionTermicaForecast5.classList.add('sensacionTermicaForecast')
            descripcion5.classList.add('descripcion-climaForecast')
            viento5.classList.add('vientoForecast')
            imagenForecast5.classList.add('imagenForecast')

            /* ANIDANDO LA INFORMACION DE LA BASE DE DATOS A LA PAGINA Y A LOS ELEMENTOS */
             
            horaClima5.textContent = `Horario: ${informacion.list[5].dt_txt}`
            clima5.textContent = `Temperatura: ${(informacion.list[5].main.temp - 273.15).toFixed(1)}°C`
            humedad5.textContent = `Humedad: ${informacion.list[5].main.humidity} %`
            presion5.textContent = `Presion: ${informacion.list[5].main.pressure} hPa`
            viento5.textContent = `Viento: ${informacion.list[5].wind.speed} m/s`
            sensacionTermicaForecast5.textContent = `Sensacion Termica: ${(informacion.list[5].main.feels_like - 273.15).toFixed(1)}°C`
            descripcion5.textContent = `Descripcion: ${informacion.list[5].weather[0].description}`
            imagenForecast5.src = url1 + informacion.list[5].weather[0].icon + '.png';

           /* AppenChil a la segunda Card del Forecast */
           
            cardForecastSix.appendChild(horaClima5)
            cardForecastSix.appendChild(clima5)
            cardForecastSix.appendChild(humedad5)
            cardForecastSix.appendChild(presion5)
            cardForecastSix.appendChild(viento5)
            cardForecastSix.appendChild(sensacionTermicaForecast5)
            cardForecastSix.appendChild(descripcion5)
            cardForecastSix.appendChild(imagenForecast5)


             /* ------------------------------------------- */
            /* SEXTA SECCION DE LAS PREDICCIONES            */
            /* ------------------------------------------- */

            const horaClima6 = document.createElement('p'),
            sensacionTermicaForecast6 = document.createElement('p'),
            humedad6 = document.createElement('p'),
            presion6 = document.createElement('p'),
            clima6 = document.createElement('p'),
            descripcion6 = document.createElement('p'),
            viento6 = document.createElement('p'),
            imagenForecast6 = document.createElement('img');

            /*CREANDO LAS CLASES A LOS ELEMENTOS  */
            horaClima6.classList.add('horaClima')
            clima6.classList.add('climaForecast') 
            humedad6.classList.add('humedadForecast')
            presion6.classList.add('presionForecast')
            sensacionTermicaForecast6.classList.add('sensacionTermicaForecast')
            descripcion6.classList.add('descripcion-climaForecast')
            viento6.classList.add('vientoForecast')
            imagenForecast6.classList.add('imagenForecast')

            /* ANIDANDO LA INFORMACION DE LA BASE DE DATOS A LA PAGINA Y A LOS ELEMENTOS */
             
            horaClima6.textContent = `Horario: ${informacion.list[6].dt_txt}`
            clima6.textContent = `Temperatura: ${(informacion.list[6].main.temp - 273.15).toFixed(1)}°C`
            humedad6.textContent = `Humedad: ${informacion.list[6].main.humidity} %`
            presion6.textContent = `Presion: ${informacion.list[6].main.pressure} hPa`
            viento6.textContent = `Viento: ${informacion.list[6].wind.speed} m/s`
            sensacionTermicaForecast6.textContent = `Sensacion Termica: ${(informacion.list[6].main.feels_like - 273.15).toFixed(1)}°C`
            descripcion6.textContent = `Descripcion: ${informacion.list[6].weather[0].description}`
            imagenForecast6.src = url1 + informacion.list[6].weather[0].icon + '.png';

           /* AppenChil a la segunda Card del Forecast */
           
            cardForecastSeven.appendChild(horaClima6)
            cardForecastSeven.appendChild(clima6)
            cardForecastSeven.appendChild(humedad6)
            cardForecastSeven.appendChild(presion6)
            cardForecastSeven.appendChild(viento6)
            cardForecastSeven.appendChild(sensacionTermicaForecast6)
            cardForecastSeven.appendChild(descripcion6)
            cardForecastSeven.appendChild(imagenForecast6)

            /* ------------------------------------------- */
            /* SEXTA SECCION DE LAS PREDICCIONES         */
            /* ------------------------------------------- */

            const horaClima7 = document.createElement('p'),
            sensacionTermicaForecast7 = document.createElement('p'),
            humedad7 = document.createElement('p'),
            presion7 = document.createElement('p'),
            clima7 = document.createElement('p'),
            descripcion7 = document.createElement('p'),
            viento7 = document.createElement('p'),
            imagenForecast7 = document.createElement('img');

            /*CREANDO LAS CLASES A LOS ELEMENTOS  */
            horaClima7.classList.add('horaClima')
            clima7.classList.add('climaForecast') 
            humedad7.classList.add('humedadForecast')
            presion7.classList.add('presionForecast')
            sensacionTermicaForecast7.classList.add('sensacionTermicaForecast')
            descripcion7.classList.add('descripcion-climaForecast')
            viento7.classList.add('vientoForecast')
            imagenForecast7.classList.add('imagenForecast')

            /* ANIDANDO LA INFORMACION DE LA BASE DE DATOS A LA PAGINA Y A LOS ELEMENTOS */
             
            horaClima7.textContent = `Horario: ${informacion.list[7].dt_txt}`
            clima7.textContent = `Temperatura: ${(informacion.list[7].main.temp - 273.15).toFixed(1)}°C`
            humedad7.textContent = `Humedad: ${informacion.list[7].main.humidity} %`
            presion7.textContent = `Presion: ${informacion.list[7].main.pressure} hPa`
            viento7.textContent = `Viento: ${informacion.list[7].wind.speed} m/s`
            sensacionTermicaForecast7.textContent = `Sensacion Termica: ${(informacion.list[7].main.feels_like - 273.15).toFixed(1)}°C`
            descripcion7.textContent = `Descripcion: ${informacion.list[7].weather[0].description}`
            imagenForecast7.src = url1 + informacion.list[7].weather[0].icon + '.png';

           /* AppenChil a la segunda Card del Forecast */
           
            cardForecastEight.appendChild(horaClima7)
            cardForecastEight.appendChild(clima7)
            cardForecastEight.appendChild(humedad7)
            cardForecastEight.appendChild(presion7)
            cardForecastEight.appendChild(viento7)
            cardForecastEight.appendChild(sensacionTermicaForecast7)
            cardForecastEight.appendChild(descripcion7)
            cardForecastEight.appendChild(imagenForecast7)


            contenedorClimaForecast.appendChild(cardForecastOne)
            contenedorClimaForecast.appendChild(cardForecastTwo)
            contenedorClimaForecast.appendChild(cardForecastThree)
            contenedorClimaForecast.appendChild(cardForecastFour)
            contenedorClimaForecast.appendChild(cardForecastFive)
            contenedorClimaForecast.appendChild(cardForecastSix)
            contenedorClimaForecast.appendChild(cardForecastSeven)
            contenedorClimaForecast.appendChild(cardForecastEight)
}





