const pokemonListEl = document.querySelector('.pokemons');

function addPokemonOnList(pokemon){
    return`
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    ${pokemon.name}

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
        </ol>

        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    
</li>
    
    
    `
}


pokeApi.getPokemons().then((pokemons = []) => {
    pokemonListEl.innerHTML = pokemons.map(addPokemonOnList).join('');
    })
    .catch((error) => console.log(error))
