const pokemonListEl = document.querySelector('.pokemons');
const buttonEl = document.querySelector('#loadmore');
const maxRecords = 15;
const limit =5;
let offset =0;

function loadPokemons(offset, limit){
pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
    pokemonListEl.innerHTML += pokemons.map((pokemon) => {
        return `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        ${pokemon.name}
    
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
    
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        
    </li>  
        `
    }).join('');
    })
    .catch((error) => console.log(error))
}

loadPokemons(offset,limit);

buttonEl.addEventListener('click', () =>{
    offset += limit;
    qtRecordsNextPage = offset + limit;
    if(qtRecordsNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemons(offset,newLimit);

        buttonEl.parentElement.removeChild(buttonEl);
    }else{
        loadPokemons(offset,limit);
    }
})