// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

function debounce(fn, delay){

    let timerId

    return function(){

        clearTimeout(timerId)

        timerId =setTimeout(() => {
            fn()
        }, delay)
    }
}

function test(){
    console.log("+Prati")
}

const funcaoDebouce = debounce(test, 2000)

console.log("Função debounce test 1")
funcaoDebouce()

console.log("Função debounce test 2")
funcaoDebouce()

console.log("Função debounce test 3")
funcaoDebouce()