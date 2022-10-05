async function getData(){
    let llamadaApi = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cordoba&appid=fffc25dd0555327e5a0644d3cbc1749c'),
       json = await llamadaApi.json();
       
       console.log(json)
}
getData();