let global = {
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,

    IMAGE_PATH_PREFIX: "images/kaart", //map + begin van de naam van de figuren
    IMAGE_PATH_SUFFIX: ".png", //extensie van de figuren

};

const setup = () => {
    let target = document.getElementById("target");
    target.addEventListener("click", klik);
}

const klik = () => {

}

window.addEventListener("load", setup);