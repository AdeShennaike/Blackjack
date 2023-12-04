//Deck of 52 cards. The face cards are hard coded while a for loop fills in the other cards.
const deck = ["sK", "cK", "hK", "dK", "sQ", "cQ", "hQ", "dQ", "sJ", "cJ", "hJ", "dJ", "sA", "cA", "hA", "dA"]

//Variables
let wager
let moneyEarned
let handSum
let winner
let playerHand
let dealerHand
const results = document.querySelector(".results")    
const cardSuit = document.querySelector(".suit")
const cardRank = document.getElementsByClassName("rank")

//Function fills in the rest of the card array
function deckFill(){
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

// cardSuit.innerHTML = "&#9830;&#65039;"
// for(let i = 0; i < cardRank.length; i++){
    //     if(cardRank[i].innerHTML === "A")
    // }
    

//draws random card from deck to players hand.
function dealPlayerCards(){
    for(let i = 0; i < 2; i++){
        playerHand.push(deck[Math.floor(Math.random() * 53)])
    }
}

//draws random card from deck to players hand.
function dealDealerCards(){
    for(let i = 0; i < 2; i++){
        dealerHand.push(deck[Math.floor(Math.random() * 53)])
    }
}

//removes cards drawn from the deck that are in the dealer and players hands.
function removeCards(){
    for(let i = 0; i < 2; i++){
        deck.splice(deck.indexOf(playerHand[i].toString()), 1)
        deck.splice(deck.indexOf(dealerHand[i].toString()), 1)
    }
}

function init(){
    wager = 0;
    moneyEarned = 0;
    handSum = 0;
    winner = null
    deckFill()
    playerHand = []
    dealerHand = []
}

init()
// dealPlayerCards()
// dealDealerCards()
// removeCards()
// console.log(playerHand)
// console.log(dealerHand)
// console.log(deck)