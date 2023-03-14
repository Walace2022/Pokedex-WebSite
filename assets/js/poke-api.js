const pokeApi = {};


function convertPokeDetailsToPokemon(pokeDetails){
    const pokemon = new Pokemon();
    pokemon.number = pokeDetails.id;
    pokemon.name = pokeDetails.name;
    
    pokemon.types = pokeDetails.types.map((typeSlot) => typeSlot.type.name);
    const [type] = pokemon.types;
    pokemon.type = type;
    
    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getDetailsUrl= (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeDetailsToPokemon);
}


pokeApi.getPokemons = (offset = 0,limit = 10) =>{
    const url =`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return    fetch(url)
    .then( (response) => response.json())
    .then((bodyJson) => bodyJson.results)
    .then((pokemons) => pokemons.map(pokeApi.getDetailsUrl))
    .then((fetchList) => Promise.all(fetchList))
    .then((pokemonsDetails) => pokemonsDetails)
}