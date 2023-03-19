const setup = () => {
    let gemeentes = [];
    let stop = false;

    while(!stop) {
        let input = prompt("Geef een gemeente in");
        stop = (input == null || input.trim().toLowerCase() == "stop");
        if(!stop){
            gemeentes.push(input);
        }
    }
    gemeentes.sort(vergelijk);

    voegGemeentesToe(gemeentes);
};

const vergelijk = (a,b) => {
    return a.localeCompare(b);
};

const voegGemeentesToe = (gemeentes) => {
    let div = document.getElementById("gemeentes");
    let htmlTekst = "<select>";
    for(let i=0; i<gemeentes.length; i++){
        htmlTekst += "<option>" + gemeentes[i] + "</option>";
    }
    htmlTekst += "</select>";
    div.innerHTML = htmlTekst;
};

window.addEventListener("load", setup);