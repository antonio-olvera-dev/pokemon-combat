
// -------------------------------------------------------------------
var transiti = document.getElementById('transition');


transVintage();
function transVintage(){
transiti.style.display = 'flex';
 transiti.classList.add('transition-vintage');
setTimeout(() => {
    transiti.style.display = 'none';
}, 900);
}

// -------------------------------------------------------------------


// -------------------------------------------------------------------

function transChoose(){



}

// -------------------------------------------------------------------

// -------------------------------------------------------------------

function transBatlle(nomTe){
    
    redimens(nomTe);

    let transVida1 = document.getElementsByClassName('dialog-vida')[0];
    let transVida2 = document.getElementsByClassName('dialog-vida')[1];
    let transimg1 = document.getElementById('pokemon-1-batlle');
    let transimg2 = document.getElementById('pokemon-2-batlle');
    
    transVida1.classList.add('transition-batlle-left');
    transVida2.classList.add('transition-batlle-right');
    
    transimg2.style.display = 'none';
    transimg1.style.display = 'none';

setTimeout(() => {
    transimg2.style.display = 'flex';
    transimg1.style.display = 'flex';
    transimg2.classList.add('transition-batlle-left');
    transimg1.classList.add('transition-batlle-right');
}, 500);

setTimeout(() => {
    
    transimg2.classList.remove('transition-batlle-left');
    transimg1.classList.remove('transition-batlle-right');
    transVida1.classList.remove('transition-batlle-left');
    transVida2.classList.remove('transition-batlle-right');

}, 1500);

    

}

// -------------------------------------------------------------------