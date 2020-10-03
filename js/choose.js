"use strict";

let pokemon = [blastoise, charizard, raichu, venusaur];
let count = 0;

let pokemonTipo = blastoise.tipo;
let pokemonNombre = blastoise.nombre;
let pokemonVida = blastoise.vida;
let pokemonAtaque = blastoise.ataque;
let pokemonDefensa = blastoise.defensa;
let pokemonImagen = blastoise.imagen;


let IdPokemonTipo = document.getElementById('caract-tipo-0');
let IdPokemonTipo1 = document.getElementById('caract-tipo-1');
let IdPokemonNombre = document.getElementById('caract-nombre')
let IdPokemonVida = document.getElementById('caract-vida')
let IdPokemonAtaque = document.getElementById('caract-ataque')
let IdPokemonDefensa = document.getElementById('caract-defensa')

let IdPokemonImagen = document.getElementById('img-cambio-pokemon')

// --------------------cambiar pokemon-----------------------------------
function accionArrowLeft() {

  count-=1;
    if(count<0){
        count=2;
    }
    

    switch (count) {
        case 0:
            cambiarPokemon(pokemon[0]);
            break;
        case 1:
            cambiarPokemon(pokemon[1]);
            break;
        case 2:
            cambiarPokemon(pokemon[2]);
            break;
  

        default:
            cambiarPokemon(pokemon[0]);
            break;

    }
    console.log(count);

}

function accionArrowRight() {

    count+=1;
    if(count>2){
        count=0;
    }

    switch (count) {
        case 0:
            cambiarPokemon(pokemon[0]);
            break;
        case 1:
            cambiarPokemon(pokemon[1]);
            break;
        case 2:
            cambiarPokemon(pokemon[2]);
            break;
     

        default:
            cambiarPokemon(pokemon[0]);
            break;

    }
    console.log(count);

}

function cambiarPokemon(obje) {

    pokemonTipo = obje.tipo;
    pokemonNombre = obje.nombre;
    pokemonVida = obje.vida;
    pokemonAtaque = obje.ataque;
    pokemonDefensa = obje.defensa;
    pokemonImagen = obje.imagen;
    // ------------------------------

    IdPokemonNombre.innerText = `${pokemonNombre}`;
    IdPokemonVida.innerText = `${pokemonVida}`;
    IdPokemonAtaque.innerText = `${pokemonAtaque}`;
    IdPokemonDefensa.innerText = `${pokemonDefensa}`;
    IdPokemonImagen.src = `${pokemonImagen}`;
    // ------------------------------------
    
    if (obje.tipo.length > 1) {

        let col = colores(obje.tipo[0]);
        let col1 = colores(obje.tipo[1]);

        IdPokemonTipo.style.backgroundColor = col;
        IdPokemonTipo1.style.backgroundColor = col1;

        IdPokemonTipo1.style.display = 'flex';
        IdPokemonTipo.innerText = `${obje.tipo[0]}`;
        IdPokemonTipo1.innerText = `${obje.tipo[1]}`;

    } else {
        let col = colores(obje.tipo[0]);

        IdPokemonTipo.style.backgroundColor = col;

        IdPokemonTipo.innerText = `${obje.tipo[0]}`;
        IdPokemonTipo1.style.display = 'none';
    }
    // ----------------------------------

    if(obje.nombre ==='Charizard'){
        IdPokemonImagen.classList.remove('choose-img-pokemon-1');
        IdPokemonImagen.classList.add('choose-img-pokemon-2');
       
    }else{
        IdPokemonImagen.classList.add('choose-img-pokemon-1');
        IdPokemonImagen.classList.remove('choose-img-pokemon-2');

    }
}
cambiarPokemon(blastoise);
// --------------------cambiar pokemon-----------------------------------

// --------------------ir a batalla-----------------------------------

function fight(){
document.getElementsByClassName('vs-1')[0].classList.add('vs-2');
setTimeout(()=>{
    document.getElementsByClassName('vs-1')[0].classList.remove('vs-2');

},500)
}

// --------------------ir a batalla-----------------------------------