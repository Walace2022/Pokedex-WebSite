const pokemonListEl = document.querySelector('.pokemons');

function addPokemonOnList(pokemon){
    return`
    <li class="pokemon">
    <span class="number">#001</span>
    ${pokemon.name}

    <div class="detail">
        <ol class="types">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="">
    </div>
    
</li>
    
    
    `
}


pokeApi.getPokemons().then((pokemons) => {
        pokemons.forEach(pokemon => {
            pokemonListEl.innerHTML += addPokemonOnList(pokemon);
        });
    })
    .catch((error) => console.log(error))