const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", toon);
};

const toon = () => {
    let isRoker = document.getElementById("roker");
    if(isRoker.checked){
        console.log("Is roker");
    } else {
        console.log("Is geen roker");
    }

    let moedertaal = document.querySelectorAll("moedertaal");
    for (let i = 0; i < moedertaal.length; i++){
        if (moedertaal[i].checked){
            console.log("Moedertaal is " + moedertaal[i].value);
            break;
        }
    }

    let buurland = document.getElementById("buurland");
    let selectedIndex = buurland.selectedIndex;
    let option = buurland.options[selectedIndex];
    console.log("Favoriete buurland is " + option.text);

    let bestelling = document.getElementById("bestelling");
    let tekst = "Bestelling bestaat uit ";
    for (let i = 0; i < bestelling.options.length; i++){
        options = bestelling.options[i];
        if (options.selected){
            tekst += options.text+" ";
        }
    }
    console.log(tekst.trim());
};

window.addEventListener("load", setup);