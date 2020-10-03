"use strict";
// ----------------------------------------------------
(function(){

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
        let audi = new Audio("music/opening.mp3")
        audi.loop = false;
        audi.autoplay = true;
        audi.volume = 1;
        audi.play();
        // ------sonido pikachu--------
        let audi2 = new Audio("music/pikachu.mp3")
        audi2.loop = false;
        audi2.volume = 1;
        audi2.autoplay = true;
        audi2.play();
        // ----------cambiar de pantalla--------------
setTimeout(()=>{

    document.getElementById('title-ini').style.display = 'none';
    document.getElementById('choose-main').style.display = 'flex';
    document.getElementById('bod').style.background = 'url(images/bg-3.jpg)';
    
},1000);
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

