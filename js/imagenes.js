const imagenAleatoria = document.getElementById('1'),
      imagenBuenosAires = document.getElementById('2'),
      imagenBarcelona = document.getElementById('3'),
      imagenCaracas = document.getElementById('4'),
      imagenLondres = document.getElementById('5'),
      imagenMadrid = document.getElementById('6'),
      imagenNewYork = document.getElementById('7'),
      imagenAndorra = document.getElementById('8'),
      imagenBerlin = document.getElementById('9'),
      imagenBogota = document.getElementById('10'),
      imagenBrasilia = document.getElementById('11'),
      imagenKabul = document.getElementById('12'),
      imagenMedellin = document.getElementById('13'),
      imagenWashintong = document.getElementById('14'),
      imagenAmsterdam = document.getElementById('15'),
      imagenViena = document.getElementById('16'),
      imagenValencia = document.getElementById('17'),
      imagenTokio = document.getElementById('18'),
      imagenSantiagoDeChile = document.getElementById('19'),
      imagenRoma = document.getElementById('20'),
      imagenRioDeJaneiro = document.getElementById('21'),
      imagenQuito = document.getElementById('22'),
      imagenParis = document.getElementById('23');


const searchImagen = event => {
    event.preventDefault();
    const { value } = event.target.weather;

    switch (value.toLowerCase()){
        case 'buenos aires':
            imagenBuenosAires.style.display = "block";
        break;

        case 'barcelona':
            imagenBarcelona.style.display = "block";
        break;

        case 'caracas':
            imagenCaracas.style.display = "block";
        break;    

        case 'londres':
            imagenLondres.style.display = "block";
        break;

        case 'madrid':
            imagenMadrid.style.display = "block";
        break;

        case 'new york':
            imagenNewYork.style.display = "block";
        break;

        case 'andorra':
            imagenAndorra.style.display = "block";
        break;    

        case 'berlin':
            imagenBerlin.style.display = "block";
        break;    

        case 'bogota':
            imagenBogota.style.display = "block";
        break;    

        case 'brasilia':
            imagenBrasilia.style.display = "block";
        break;    

        case 'kabul':
            imagenKabul.style.display = "block";
        break;    

        case 'medellin':
            imagenMedellin.style.display = "block";
        break;    

        case 'washington':
            imagenWashintong.style.display = "block";
        break;    

        case 'amsterdam':
            imagenAmsterdam.style.display = "block";
        break;    

        case 'vienna':
            imagenViena.style.display = "block";
        break;    

        case 'valencia':
            imagenValencia.style.display = "block";
        break;    

        case 'tokio':
            imagenTokio.style.display = "block";
        break; 
        
        case 'santiago':
            imagenSantiagoDeChile.style.display = "block";
        break;    

        case 'roma':
            imagenRoma.style.display = "block";
        break;    

        case 'rio de janeiro':
            imagenRioDeJaneiro.style.display = "block";
        break;    

        case 'quito':
            imagenQuito.style.display = "block";
        break;    

        case 'paris':
            imagenParis.style.display = "block";
        break;    
        
        default:
            imagenAleatoria.style.display = "block";
        break;
    }
}







