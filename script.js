//Deck of 52 cards. The face cards are hard coded while a for loop fills in the other cards.
const deck = ["sk", "ck", "hk", "dk", "sq", "cq", "hq", "dq", "sj", "cj", "hj", "dj", "sa", "ca", "ha", "da"]

//Function fills in the rest of the card array
function cardFill(){
    for(let i = 2; i < 11; i++){
        deck.push(`s${i}`)
    }
    for(let i = 2; i < 11; i++){
        deck.push(`c${i}`)
    }
    for(let i = 2; i < 11; i++){
        deck.push(`h${i}`)
    }
    for(let i = 2; i < 11; i++){
        deck.push(`d${i}`)
    }
}

// cardFill()
// console.log(deck)

// const cardSuit = document.querySelector()