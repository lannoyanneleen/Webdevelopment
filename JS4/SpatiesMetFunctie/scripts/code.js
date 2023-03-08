const setup = () => {
    let btnToon=document.getElementById("btnConsole");
    btnToon.addEventListener("click", toon);
};

const toon = () => {
    let txtInput=document.getElementById("tekstInput");
    let tekst=txtInput.value;
    let tekstMetSpaties=maakMetSpaties(tekst);
    console.log(tekstMetSpaties);
};

const maakMetSpaties = (inputText) => {
    let result="";

    for (let i=0;i<inputText.length;i++) {
        result+=inputText.charAt(i);
        result+=" ";
    }

    return result;
};

window.addEventListener("load", setup);