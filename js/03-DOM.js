// Interagindo com o DOM (estrutura de divs)

let divMessage = document.getElementById("message");

console.log(divMessage);

divMessage.innerText = "Olá Mundo!";
divMessage.innerHTML = "Olá <b>Mundo</b>!";

let nome = "Fulano";
let urlImgProfile = "https://cdn.vectorstock.com/i/1000v/73/04/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg";

divMessage.innerHTML = `<p> Olá ${nome}! </p> <img src = ${urlImgProfile}>`;

