// 9. Conversão Entre Formatos
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente. ○ objetoParaPares(obj) faz o inverso, retornando um array depares.

function paresParaObjeto(pares){
const objetoResultado = {}

for (const par of pares) {
    const [chave, valor] = par
    objetoResultado[chave] = valor
}
    return objetoResultado
}   

function objetoParaPares(obj){
const arrayResultado = []

for (const chave in obj) {
    const valor = obj[chave]
    arrayResultado.push([chave, valor])
}
        return arrayResultado
}

const objetoTest = { nome: "Julio", idade: 25, cidade: "São Paulo"}
const arrayPares = objetoParaPares(objetoTest)
console.log("Objeto para pares:")
console.log(arrayPares)

const objetoConvertido = paresParaObjeto(arrayPares)
console.log("Pares para objeto:")
console.log(objetoConvertido)