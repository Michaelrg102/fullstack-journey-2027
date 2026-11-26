// Exercício 1:
const pokemons = ["Tyranitar", "Sylveon", "Charizard", "Venusaur", "Garchomp"];

console.log("Pokémon: " + pokemons);

// Exercício 2:
console.log(pokemons[0]);
console.log(pokemons[2]);
console.log(pokemons[4]);

// Exercício 3:
console.log("Pokémon Registrados: " + pokemons.length)

// Exercício 4:
const pokemons1 = ["Garchomp", "Lucario", "Greninja"];

pokemons1.push("Charizard");
pokemons1.unshift("Mewtwo");

console.log(pokemons1);

// Exercício 5:
pokemons1.pop();
pokemons1.shift();

console.log(pokemons1);

// Exercício 6:
const pokemons2 = ["Garchomp", "Lucario", "Greninja"];

pokemons2[1] = "Pikachu"

console.log(pokemons2);

// Exercício 7:
const pokemons3 = ["Pikachu", "Voltorb", "Meowth", "Zacian", "Ditto"];

for(let i = 0; i < pokemons3.length; i++){
    console.log(pokemons3[i]);
}

// Exercício 8:
const timePokemon = ["Tyranitar", "Sylveon", "Charizard", "Venusaur", "Garchomp", "Lucario"];

for(const pokemon of timePokemon){
    console.log(pokemon);
    
}

console.log(timePokemon.length);

timePokemon.push("Zapdos");
timePokemon.shift();

console.log(timePokemon);
