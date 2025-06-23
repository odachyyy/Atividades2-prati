// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

const frase = "olá olá mundo mundo" 
const palavras = frase.split(" ")

let palavrasUnicas = []

for(let i = 0; i < palavras.length; i++){

    const palavraAtual = palavras[i]

    if( !palavrasUnicas.includes(palavraAtual)){
        palavrasUnicas.push(palavraAtual)
    }

}

console.log("As palavras únicas são: ")
console.log(palavrasUnicas)