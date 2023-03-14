const pokeApi = {};

pokeApi.getDetailsUrl= (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
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