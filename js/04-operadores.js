// OPERADORES ARITMETICOS

let num_a = 5;
let num_b = 2;

console.log(`num A: ${num_a}`);
console.log(`num B: ${num_b}`);

console.log(`-------------`)

let soma = num_a + num_b;
let sub = num_a - num_b;
let mult = num_a * num_b;
let divisao = num_a / num_b;
let resto_divisao = num_a % num_b;
let potencia = num_a ** num_b;
let xor = num_a ^ num_b; // operador lógico XOR

console.log(`
soma = ${soma}
subtração = ${sub} 
multiplicação = ${mult}
divisão = ${divisao} 
resto da divisão = ${resto_divisao}
potência = ${potencia}`)

// OPERADORES DE INCREMENTO

let num = 6;
num++;  // num = 7
num--;  // num = 6
console.log(`
incremento = ${num}`)

// OPERADOR PÓS FIXADO -> executa primeiro função e depois executa a operação
console.log(num++);  // num = 6
console.log(num);  // num = 7

// OPERADOR PRÉ FIXADO -> executa primeiro o operador e depois a função
console.log(++num);  // num = 8

// OPERADORES DE ATRIBUIÇÃO

num += 2;  // num = 10

// EXEMPLO PRÁTICO

let titulo = "<h1> Título </h1>";
let subtitulo = "<h2> Subtítulo </h2>";

let divMessage = document.getElementById("message");

divMessage.innerHTML = titulo;
divMessage.innerHTML += subtitulo;