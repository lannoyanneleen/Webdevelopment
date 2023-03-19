const setup = () => {
    let txtTekst = document.getElementById("tekst");
    let tekst = txtTekst.value;
    let output = document.getElementById("output");
    let resultaat = veranderen(tekst, "de", "het");
    output.innerHTML = resultaat;
}

const veranderen = (tekst, oud, nieuw) => {
    let resultaat = tekst;
    let idx = resultaat.indexOf(oud);
    while (idx != -1){
        let voor = resultaat.slice(0, idx);
        let na = resultaat.slice(idx + oud.length, resultaat.length);
        resultaat = voor + nieuw + na;
        idx = resultaat.indexOf(oud, idx + nieuw.length);
    }
    return resultaat;
}

window.addEventListener("load", setup);