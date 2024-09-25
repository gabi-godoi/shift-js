// Para declarar variáveis posso usar: let, var ou const
/*
var declara variável global
const declara constantes
*/
// string
let nome = "Alexandre";
console.log(nome, typeof (nome));

// number - int float double
let idade = 25;
console.log(idade, typeof (idade));

let preco = 10.90;
console.log(preco, typeof (preco));

// boolean
let autenticado = true;
console.log(autenticado, typeof (autenticado));

// objects
let nulo = null;
console.log(nulo, typeof (nulo));

// undefined
let email;
console.log(email, typeof (email));

email = "a@b.com";
console.log(email, typeof (email));

// variável CONSTANTE
const CPF = '12345678900' // constantes são sempre declaradas maiúsculas
console.log(CPF, typeof (CPF)) // não é possível atribuir outro valor para a variável constante

// ----- INPUT DE VALORES PARA USER -----//

let InputNome = prompt("Digite seu nome: ");

alert(`Olá, ${InputNome}! Seja bem-vindo!`); // Template String / Literals
alert("Olá, " + InputNome + "! Seja bem-vindo!")