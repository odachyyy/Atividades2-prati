// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
    { cliente: "Julio", total: 100},
    { cliente: "Jaques", total: 300},
    { cliente: "Bruno", total: 50},
    { cliente: "Carla", total: 45},
    { cliente: "Julio", total: 250}
]

function juntarVendas(listaDeVendas){
    const valorInicial = {}
 
    const totaisCliente = listaDeVendas.reduce((acumulador, vendaAtual) => {

        const cliente = vendaAtual.cliente
        const total = vendaAtual.total

        if(acumulador[cliente]){

            acumulador[cliente] = acumulador[cliente] + total

        }else{

            acumulador[cliente] = total

        }
        
        return acumulador

    }, valorInicial)

    return totaisCliente

}

const resultado = juntarVendas(vendas)
console.log(resultado)