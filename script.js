const pokemonContainer = document.getElementById('pokemon-container');

// Obtener los primeros 10 Pokémon
for (let i = 1; i <= 10; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {
            // Crear una tarjeta básica con el nombre y la imagen del Pokémon
            const card = document.createElement('div');
            card.classList.add('pokemon-card');

            card.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
            `;

            // Añadir la tarjeta al contenedor
            pokemonContainer.appendChild(card);
        })
}
