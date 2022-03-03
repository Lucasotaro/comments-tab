exibeComentario();
let index = 0;

let botaoCriar = document.querySelector("#button");

botaoCriar.onclick = function () {
  let user = document.querySelector("#user").value;
  let text = document.querySelector("#text").value;
  funcComment(user, text);
  document.querySelector("#text").value = "";
  document.querySelector("#user").value = "";
};

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    botaoCriar.click();
  }
});

function funcComment(user, text) {
  if (text != "" && user != "") {
    funcSave(user, text);
    exibeComentario();
  } else {
    alert("Preencha todos os campos");
  }
}

function exibeComentario(){
    const keys = Object.keys(localStorage);
    document.querySelector("#container").innerHTML = "";
    for (let user of keys) {
    let comments = JSON.stringify(localStorage.getItem(user));
    document.querySelector("#container").value = "";
    const comment = document.createElement("div");
    comment.classList.add("content");
    comment.innerHTML = `
        <b>${user}:</b> <br><br> <a>${comments}</a>
        `;
    let parentElement = document.getElementById("container");
    parentElement.appendChild(comment);
    }
}

function funcSave(user, text) {
  JSON.stringify(localStorage.setItem(user, text));
}