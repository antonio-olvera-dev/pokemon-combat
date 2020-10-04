let vidaVenusaur;
let ataqueVenusaur;
let vidaMipokemon;
let ataqueMipokemon;
let pokemonActual;

let efectividadVenusaur;
let efectividadpokemonActual;

let vidaSliderVenusaur;
let vidaSliderMipoke;

//-------------------------------------------
function slidercolor(cantidad, poke) {

    let gradiente = ` linear-gradient(
    to right,
   rgb(43, 223, 97) 0%,
rgb(43, 223, 97) ${cantidad}%,
rgba(186, 0, 0, 1) ${cantidad}%,
rgba(186, 0, 0, 1) 100% )`


    document.getElementById(`slider-in-${poke}`).style.background = gradiente;
}

//--------animacion rellenar vida-------------
function sumarVida(saludAntes, saludDespues, poke) {
    let cont = saludAntes;
    let rellen = setInterval(() => {
        cont += 1;
        slidercolor(cont, poke);
        if (cont >= saludDespues) {
            clearTimeout(rellen);
        }
    }, 15);
}

function restarVida(saludAntes, saludDespues, poke) {
    let cont = saludAntes;
    let rellen = setInterval(() => {
        cont -= 1;
        slidercolor(cont, poke);
        if (cont <= saludDespues) {
            clearTimeout(rellen);
        }
    }, 15);
}

//--------animacion rellenar vida-------------

// ------------------------------iniciar batalla------------------------------------------------------------

function empezarBatalla(pokemonElegido) {
    setTimeout(() => {
        sumarVida(0, 100, 1);
        sumarVida(0, 100, 2);
    }, 300);

    pokemonActual = pokemonElegido;
    calculoCaracteristicas(venusaur, pokemonActual);
    cargarPokemon();


    setTimeout(() => {
        empezarBatalla2();
    }, 3000);

}

let invertir = false;

function empezarBatalla2() {



    if (!invertir) {
        //---------venusaur ataca------------
        let vidaTempoAntes = (vidaMipokemon * 100) / vidaSliderMipoke;
        vidaMipokemon = Math.round(vidaMipokemon - ataqueVenusaur);
        let vidaTempoDespues = (vidaMipokemon * 100) / vidaSliderMipoke;

        restarVida(vidaTempoAntes, vidaTempoDespues, 1);

        mensajes(venusaur.nombre, pokemonActual.nombre, efectividadVenusaur);
        invertir = true;
    } else {
        // -------pokemon elegido ataca----------
        let vidaTempoAntes = (vidaVenusaur * 100) / vidaSliderVenusaur;
        vidaVenusaur = Math.round(vidaVenusaur - ataqueMipokemon);
        let vidaTempoDespues = (vidaVenusaur * 100) / vidaSliderVenusaur;

        restarVida(vidaTempoAntes, vidaTempoDespues, 2);

        mensajes(pokemonActual.nombre, venusaur.nombre, efectividadpokemonActual);
        invertir = false;
    }


    setTimeout(() => {

        // -----------venusaur gana---------------

        if (vidaMipokemon <= 0) {
             reproductor('music/perdedor.mp3', 1);
             setTimeout(() => {
                musicadeBatalla.pause();
             }, 1000);

        }
        //-----------venusaur pierde---------------
        else if (vidaVenusaur <= 0) {
             reproductor('music/ganador.mp3', 1);
             setTimeout(() => {
                musicadeBatalla.pause();
             }, 300);
        } else {
            empezarBatalla2();
        }


    }, 2000);

}


function mensajes(atacante, victim, efectiv) {

    let dialogo = document.getElementById('batlle-bottom-dialog-text');
    dialogo.innerText += `\n${atacante} atacó a ${victim} y el ataque es  ${efectiv}`;
}



// ------------------------------------------------------------------------------------------
function cargarPokemon(){

document.getElementById('nombre-pokemon-vida').innerText = pokemonActual.nombre;
document.getElementById('pokemon-1-batlle').src = `${pokemonActual.imagen}`;

}

// ------------------------------------------------------------------------------------------


// ---------------------------calculo de caracteristicas---------------------------------------

function calculoCaracteristicas(ven, mipoke) {

    vidaVenusaur = venusaur.vida + (venusaur.defensa * 3);
    vidaMipokemon = mipoke.vida + (mipoke.defensa * 3);

    vidaSliderVenusaur = vidaVenusaur;
    vidaSliderMipoke = vidaMipokemon;

    calculoPoder(mipoke.tipo[0]);


}

function calculoPoder(tipo) {

    // 783 883 338 85.5 "muy efectivo" "poco efectivo"
    // 783 749 42.25 346 "poco efectivo" "muy efectivo"
    //783 575 169 92.5 "normal" "poco efectivo"


    switch (tipo) {

        case 'Fuego':
            ataqueVenusaur = venusaur.ataque / 4;
            ataqueMipokemon = pokemonActual.ataque * 2;

            efectividadVenusaur = 'poco efectivo!';
            efectividadpokemonActual = 'muy efectivo!';
            break;
        case 'Agua':
            ataqueVenusaur = venusaur.ataque * 2;
            ataqueMipokemon = pokemonActual.ataque / 2;

            efectividadVenusaur = 'muy efectivo!';
            efectividadpokemonActual = 'poco efectivo!';
            break;
        case 'Eléctrico':
            ataqueVenusaur = venusaur.ataque;
            ataqueMipokemon = pokemonActual.ataque / 2;

            efectividadVenusaur = 'normal.';
            efectividadpokemonActual = 'poco efectivo!';
            break;

        default:
            ataqueVenusaur = venusaur.ataque;
            ataqueMipokemon = pokemonActual.ataque;

            efectividadVenusaur = 'normal.';
            efectividadpokemonActual = 'normal.';
            break;

    }
}

// ----------------------------animacion de atacar--------------------------------------------------------------
function animaAtaque() {


}

function animaDaño() {


}