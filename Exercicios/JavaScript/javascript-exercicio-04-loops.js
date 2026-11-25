// Exercício 1:
for(let e1 = 1; e1 <= 10; e1++){
    console.log(e1);
}

// Exercício 2:
for(let e2 = 10; e2 >= 0; e2--){
    console.log(e2);
}
console.log("Contagem finalizada!");

// Exercício 3:

let nivelPokemon = 1;

while(nivelPokemon <= 10){
    console.log(nivelPokemon);
    nivelPokemon++;
}

// Exercício 4:
let pokebolas = 5;

do {
    console.log("Pokebolas: " + pokebolas);
    pokebolas--;
} while (pokebolas >= 0);

// Exercício 5:
for(let e5 = 1; e5 <= 10; e5++){
    if(e5 === 6){
        break;
    }
    console.log(e5);
}

// Exercício 6:
for(let e6 = 1; e6 <= 10; e6++){
    if(e6 % 2 == 0){
        continue;
    }
    console.log(e6);
}

// Exercício 7:
let nivel = 1;
let experiencia = 0;

while(nivel < 10){
    console.log("Nível: " + nivel + " Experiência: " + experiencia);
    nivel++;
    experiencia += 100;
}
