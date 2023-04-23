let global = {
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,

    IMAGE_PATH_PREFIX: "images/kaart", //map + begin van de naam van de figuren
    IMAGE_PATH_SUFFIX: ".png", //extensie van de figuren

};

const setup = () => {
    let cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => card.addEventListener("click", flipCard));
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
}

const flipCard = () => {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

const checkForMatch = () => {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

const disableCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

const unflipCards = () => {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

const resetBoard = () => {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

const shuffle = () => {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
};


window.addEventListener("load", setup);