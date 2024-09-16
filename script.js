const pokemonContainer = document.getElementById('pokemon-container');

// Obtener los primeros 10 Pokémon
for (let i = 1; i <= 10; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {
            const card = document.createElement('div');
            card.classList.add('pokemon-card');

            card.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
            `;

            pokemonContainer.appendChild(card);
        })
}
