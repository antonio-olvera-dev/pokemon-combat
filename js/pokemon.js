"use strict";

var venusaur = {
    nombre: "Venusaur",
    tipo: ['Planta', 'Veneno'],
    vida: 270,
    ataque: 169,
    defensa: 171,
    imagen:'images/venusaur.gif',

    grito:'music/venusaur.mp3'
}

var charizard = {
    nombre: "Charizard",
    tipo: ['Fuego', 'Volador'],
    vida: 266,
    ataque: 173,
    defensa: 161,
    imagen:'images/charizard.gif',

    grito:'music/charizard.mp3'
}

var blastoise = {
    nombre: "Blastoise",
    tipo: ['Agua'],
    vida: 268,
    ataque: 171,
    defensa: 205,
    imagen:'images/blastoise.gif',

    grito:'music/blastoise.mp3'
}

var raichu = {
    nombre: "Raichu",
    tipo: ['Eléctrico'],
    vida: 230,
    ataque: 185,
    defensa: 115,
    imagen:'images/raichu.gif',
    
    grito:'music/raichu.mp3'
}

// --------------------colores-----------------------------------

function colores(tipo) {
    let color;

    switch (tipo) {
        case 'Planta':
            color = 'rgb(2, 179, 2)';
            break;
        case 'Veneno':
            color = 'rgb(150, 2, 179)';
            break;
        case 'Fuego':
            color = 'rgb(181, 39, 29)';
            break;
        case 'Volador':
            color = 'rgb(167, 128, 173)';
            break;
        case 'Agua':
            color = 'rgb(2, 66, 163)';
            break;
        case 'Eléctrico':
            color = 'rgb(209, 206, 19)';
            break;

        default:
            color = 'rgb(2, 179, 2)';
            break;

    }

    return color;
}

// --------------------colores-----------------------------------

