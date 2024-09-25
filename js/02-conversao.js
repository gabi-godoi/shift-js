// Conversão de valores

// Coerção implicita - conversão de valores de forma implicita

let variavel = "3" + 2;
console.log(variavel, typeof (variavel)); // exibe 32

// Coerção explícita - conversão de valores de forma explicita

// Number()
let pontos = Number("120");
console.log(pontos, typeof (pontos));

// Boolean()
let valorlogico = ""; // string
valorlogico = Boolean(valorlogico); // usado para verificar se o campo está vazio
console.log(valorlogico, typeof (valorlogico));