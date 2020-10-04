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



function empezarBatalla(pokemonElegido){
     //--------animacion rellenar vida-------------
        let cont = 0;
        let rellen = setInterval(() => {
            cont += 1;
            slidercolor(cont, 1);
            slidercolor(cont, 2);
            if (cont >= 100) {
                clearTimeout(rellen);
            }
        }, 10);
     //--------animacion rellenar vida-------------

}