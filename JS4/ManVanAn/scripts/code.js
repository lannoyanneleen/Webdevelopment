const setup = () => {
    let txtTekst = document.getElementById("Tekst");
    let tekst = txtTekst.value;
    let txtZoekTekst = document.getElementById("ZoekTekst");
    let zoekTekst = txtZoekTekst.value;
    let txtAantal = document.getElementById("Aantal");

    let aantal = telAantal(tekst, zoekTekst);
    txtAantal.textContent=aantal;
};

const telAantal = (tekst, zoekTekst) => {
    let result = 0;
    let index = tekst.indexOf(zoekTekst);
    while (index != -1) {
        result++;
        index = tekst.indexOf(zoekTekst, index+zoekTekst.length);
    }
    return result;
};

window.addEventListener("load", setup);