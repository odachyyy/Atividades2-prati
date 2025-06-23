// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

function memoize(fn){

    const memoria = {}

    return function(...args){
        const chave = JSON.stringify(args)

        if( chave in memoria){
            console.log(`Retornando do cache: ${chave}`)
            return memoria[chave]
        }else{
            console.log(`Calculando e armazenando: ${chave}`)

            const resultado = fn(...args)

            memoria[chave] = resultado

            return resultado
        }
    }
}

function soma(a, b){
    console.log("Realizando soma...")
    return a + b
}

const somaMemoize = memoize(soma)

console.log(somaMemoize(10,30))
console.log(somaMemoize(10,30))
console.log(somaMemoize(55,15))
console.log(somaMemoize(55,15))