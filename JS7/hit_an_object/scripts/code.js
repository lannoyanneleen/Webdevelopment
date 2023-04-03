
let global = {
    IMAGE_COUNT: 5, //aantal figuren
    IMAGE_SIZE: 48, //grootte van de figuut
    IMAGE_PATH_PREFIX: "images/", //map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren

    MOVE_DELAY: 3000, //aantal milliseconden voor een nieuwe afbeelding verschijnt

    score: 0, //aantal hits
    timeoutId: 0 //id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startGame);
};

const startGame = () => {
    console.log("start game");
    document.getElementById("btnStart").style.display = "none";
    let target = document.getElementById("target");
    target.addEventListener("click", klik);

    move();
}

const klik = (event) => {
    console.log(event.target);
    if (event.target.className.indexOf("bom") != -1) {
        gameOver();
    } else {
        hit();
    }
}

const move = () => {
    let target = document.getElementById("target");
    let speelscherm = document.getElementById("playField");
    //maximale posities zijn afhankelijk van het speelscherm
    let maxLeft = speelscherm.clientWidth - global.IMAGE_SIZE;
    let maxTop = speelscherm.clientHeight - global.IMAGE_SIZE;
    let nummer = Math.floor(Math.random()*global.IMAGE_COUNT);

    if (nummer == 0) {
        //bom
        target.className = "bom";
    } else {
        //iets anders
        target.className = "";
    }

    target.setAttribute("src", global.IMAGE_PATH_PREFIX + nummer + global.IMAGE_PATH_SUFFIX);

    target.style.left = Math.floor(Math.random() * maxLeft) +"px";
    target.style.top = Math.floor(Math.random() * maxTop) + "px";

    global.timeoutId = setTimeout(move, global.MOVE_DELAY);
}

const gameOver = () => {
    clearTimeout(global.timeoutId);
    alert("GAME OVER");

    document.getElementById("btnStart").style.display = "";

    let score = document.getElementsByClassName("score");
    let i = 0;
    clearTimeout(global.timeoutId);

    global.score = 0;
    for (i = 0; i < score.length; i++) {
        score[i].innerText = global.score;
    }
}

const hit = () => {
    let score = document.getElementsByClassName("score");
    let i = 0;
    clearTimeout(global.timeoutId);

    global.score++;
    for (i = 0; i < score.length; i++) {
        score[i].innerText = global.score;
    }

    move();
}



window.addEventListener("load", setup);


