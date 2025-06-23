// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

const produtos = [
    { nome: "maca", preco: 10},
    { nome: "laranja", preco: 12},
    { nome: "uva", preco: 7},
    { nome: "tomate", preco: 8}
]

function nomesOrdenados(listaDeProdutos){
    const produtosOrdernados = [ ...listaDeProdutos].sort((a,b) => a.preco - b.preco)

    const nomes = produtosOrdernados.map(produto => produto.nome)

    return nomes

}

const resultado = nomesOrdenados(produtos)
console.log(resultado)