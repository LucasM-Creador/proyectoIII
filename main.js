let contenedorCards = document.getElementById('contenedor_cards')
let cardsHTML = ""

for(let cafes in cafesitos){
    cardsHTML += crearCards(cafes)
}

contenedorCards.innerHTML = cardsHTML

function crearCards(cafes){
    let card = document.createElement('div')
    card.classList.add('card')

    let id = document.createElement('div')
    let name = document.createElement('p')
    let image = document.createElement('img')

    id.innerText = cafesitos[cafes].id
    name.innerText = cafesitos[cafes].name
    image.src = cafesitos[cafes].image

    card.append(id, name, image)

    return card.outerHTML
}