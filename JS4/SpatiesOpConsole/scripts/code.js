const setup = () => {
    let btnConsole = document.getElementById("btnConsole");
    btnConsole.addEventListener("click", toon);
}

const toon = () => {
    let txtInput = document.getElementById("input");
    let tekst = txtInput.value;
    let tekstSpaties = "";

    for (let i=0; i <tekst.length; i++){
        tekstSpaties += tekst.charAt(i);
        tekstSpaties += " ";
    }

    console.log(tekstSpaties)

}

window.addEventListener("load", setup);