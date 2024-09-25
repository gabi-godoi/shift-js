// OPERADORES RELACIONAIS

// ===  !==  verifica se o valor e se o TIPO são iguais ou diferentes
// "5" == 5  true
// "5" === 5 false

let verificacao = "18" == 18; // true
let verificacao_estrita = "18" === 18 // false
console.log(verificacao, typeof (verificacao));
console.log(verificacao_estrita, typeof (verificacao_estrita));

let idade = 18;
console.log(idade >= 18, "Idade de maior");

let nome = "";
console.log(nome != "", "Digite algum valor.");  // false

// OPERADORES LÓGICOS e: &&  ou: ||  not: !

let emailsalvo = "a@a";
let senhasalva = 123;

let email = prompt("Digite seu e-mail: ");
let senha = prompt("Digite sua senha: ");

let statuslogin = (email == emailsalvo) && (senha == senhasalva);
console.log(`Status de Login: ${statuslogin}`);