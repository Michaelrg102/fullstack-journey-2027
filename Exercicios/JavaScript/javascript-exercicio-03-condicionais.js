// Exercício 1:

const nivelPokemon = 80;

if (nivelPokemon >= 80) {
    console.log("Pokémon Forte!");
} else {
    console.log("Pokémon ainda fraco!");
}

// Exercício 2:

const nota = 8;

if (nota >= 9) {
    console.log("Excelente!");
} else if (nota >= 7) {
    console.log("Aprovado!");
} else if (nota >= 5) {
    console.log("Recuperação!");
} else {
    console.log("Reprovado!");
}

// Exercício 3:

let tipoPokemon = "Água";

switch (tipoPokemon) {
    case ("Fogo"):
        console.log("É super efetivo contra Planta!");
        break

    case ("Água"):
        console.log("É super efetivo contra Fogo!");
        break

    case ("Planta"):
        console.log("É super efetivo contra Água!");
        break

    case ("Elétrico"):
        console.log("É super efetivo contra Água!");
        break

    default:
        console.log("Tipo não cadastrado!");
        break

}

// Exercício 4:
let shiny = true;

console.log(shiny ? "Pokémon Shiny!" : "Pokémon normal!");

// Exercício 5:

let pokemon = "Garchomp";
let nivel = 85;
let vida = 100;
let verificar_Shiny = true;

if(pokemon === "Garchomp"){
    console.log("Pokémon identificado!");
} else{
    console.log("Pokémon não identificado");
}

if(nivel >= 50){
    console.log("Nível adequado para batalha!");
} else{
    console.log("Pokemon com nível baixo");
}

if(vida > 0){
    console.log("Pokémon está disponível para batalha!");
} else{
    console.log("Pokémon não está disponivel para a batalha");
}

shiny ? console.log("Um Garchomp Shiny!") : console.log("Um Garchomp Normal!")
