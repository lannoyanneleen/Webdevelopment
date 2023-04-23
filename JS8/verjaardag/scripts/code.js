const setup = () => {
// Vraag om de verjaardagsdatum van de gebruiker
    let verjaardag = prompt("Voer uw verjaardagsdatum in (dd-mm-jjjj): ");
// Converteer de verjaardagsdatum naar een datumobject
    let verjaardagsdatum = new Date(verjaardag);
    verschil(verjaardagsdatum);
}

const verschil = (verjaardagsdatum) => {
    // Bereken het verschil tussen de huidige datum en de verjaardagsdatum in milliseconden
    let verschilInMs = Date.now() - verjaardagsdatum.getTime();
    // Converteer milliseconden naar dagen
    let verschilInDAgen = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    // Print het aantal dagen tussen de verjaardagsdatum en de huidige datum in de console
    console.log("Het aantal dagen tussen uw verjaardag en de huidige datum is: " + differenceInDays + " dagen.");
}

window.addEventListener("load", setup);