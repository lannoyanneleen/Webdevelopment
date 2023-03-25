const Create = () => {
    let para = document.createElement("p");
    let t = document
        .createTextNode("This is text.");
    para.appendChild(t);
    document.getElementById("myDIV")
        .appendChild(para);
};

const setup = () => {
    document.getElementById("btnCreate")
        .addEventListener("click",Create);

};

window.addEventListener("load", setup);