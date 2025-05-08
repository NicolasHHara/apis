const URLAPI = 'https://pokeapi.co/api/v2/';


fetch(URLAPI)
    .then(res => res.json())
    .then(data => {
       function pokemonImage(image){
        const imagesPokemon = 'https://pokeapi.co/api/v2/pokemon/'
        imagesPokemon.innerHTML =  <img src="${country.flags.svg}" alt="Bandeira de ${country.name.common}">
       } 
    });