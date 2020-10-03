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


let aud = document.getElementById("audio").children[0];
aud.volume = 0.2;