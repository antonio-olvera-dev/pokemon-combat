"use strict";
var audioInicio = new Audio("music/opening.mp3");


// ----------------------------------------------------
(function () {

    document.getElementById('choose-main').style.display = 'none';
}());
// ---------------------------------------------------------

// ----------animacion mew------------------
let blockMew = true;
setInterval(() => {

    let mew = document.getElementsByClassName("img-mew")[0].children[0];
    if (blockMew) {
        mew.src = "images/mew-idle-back.gif";
        mew.classList.add("img-mew-2");
        mew.classList.remove("img-mew-1");
        blockMew = false;
    } else {
        mew.src = "images/mew-idle.gif";
        mew.classList.add("img-mew-1");
        mew.classList.remove("img-mew-2");
        blockMew = true;
    }

}, 20000);

// -------------audio inicio------------------
let blockAudio = false;
document.getElementById('bod').addEventListener('click', function () {

    if (!blockAudio) {
        let context = new AudioContext();
        // var audioInicio = new Audio("music/opening.mp3");
        audioInicio.loop = false;
        audioInicio.autoplay = true;
        audioInicio.volume = 0.6;
        audioInicio.play();

        // ------sonido pikachu--------

        reproductor("music/pikachu.mp3", 1);
        // ----------cambiar de pantalla--------------
        document.getElementById('title-ini').style.display = 'none';
        
        setTimeout(() => {
            transVintage();
            


            document.getElementById('choose-main').style.display = 'flex';
            document.getElementById('div-img-pokedex').style.display = 'flex';
            document.getElementById('bod').style.background = 'url(images/bg-4.png)';
            // ----
            reproductor(`${venusaur.grito}`, 1);
            // ----
            cambiarPokemon(blastoise);

            transChoose();
        }, 1000);
        // ----------cambiar de pantalla--------------
        blockAudio = true;
    }
    fullsc();

});

document.getElementById('bod').addEventListener('keypress', function () {
    document.getElementById('bod').click()
});
// -------------audio inicio------------------
// -------------fullscreen------------------
function fullsc() {
    let elem = document.getElementById('doc-main');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
} // -------------fullscreen------------------

function reproductor(ruta, volumen) {

    let audi2 = new Audio(ruta)
    audi2.loop = false;
    audi2.volume = volumen;
    audi2.autoplay = true;
    audi2.play();

}