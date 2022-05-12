
const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },

    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98 
    },

    {
        id: 3,
        name: "Água de coco",
        price: 8.99 
    },

    {
        id: 4,
        name: "Mamão",
        price: 9.98 
    },

    {
        id: 5,
        name: "Água tônica",
        price: 17.98 
    },
]

let main = document.createElement('main')
let body = document.getElementById('body')
body.appendChild(main)

let title = document.createElement('p')
title.innerText = 'Produto/Preço'
main.appendChild(title)

let ul = document.createElement('ul')
main.appendChild(ul)


let section = document.createElement('section')
let section2 = document.createElement('section')
section.appendChild(section2)

function lerArray(){
    for (let i=0; i<productsCart.length; i++){
        let produto = document.createElement('p')
        let preco = document.createElement('p')
        let lista = document.createElement('li')
        
        produto.innerText = productsCart[i].name
        preco.innerText = `R$ ${productsCart[i].price}`
        
        lista.append(produto, preco)
        ul.appendChild(lista)
    }
}
lerArray()

let totalDaCompra = document.createElement('p')
totalDaCompra.innerText = 'Total da compra'
section2.appendChild(totalDaCompra)

function valorTotal(){
    let soma = 0
    for (let i=0; i<productsCart.length; i++){
        soma += productsCart[i].price

    }
    let total = document.createElement('p')
    total.innerText = `R$ ${soma}`
    section2.appendChild(total)
    main.appendChild(section)
}
valorTotal()

let botao = document.createElement('button')
botao.innerText = 'Finalizar compra'
section.appendChild(botao)