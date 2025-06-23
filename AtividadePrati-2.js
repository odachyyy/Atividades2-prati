// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

const numeroAleatorio = Math.floor(Math.random() * 100) + 1

let numeroEscolhido
let tentativas = 0

while( numeroEscolhido !== numeroAleatorio){

numeroEscolhido = parseInt(prompt("Digite um número entre 1 e 100: "))

tentativas++

if(numeroEscolhido < numeroAleatorio){
    console.log("Número mais alto.")
}else if(numeroEscolhido > numeroAleatorio){
    console.log("Número mais baixo.")
}
}

console.log(`Parabéns! Você acertou o número secreto: ${numeroAleatorio}, depois de ${tentativas} tentativas.`)