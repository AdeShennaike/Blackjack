//Deck of 52 cards. The face cards are hard coded while a for loop fills in the other cards.
const deck = ["sK", "cK", "hK", "dK", "sQ", "cQ", "hQ", "dQ", "sJ", "cJ", "hJ", "dJ", "sA", "cA", "hA", "dA"]

//Variables
let moneyEarned
let handSum
let winner
let playerHand
let dealerHand
const startButton = document.querySelector(".start")
const hitButton = document.querySelector(".hit")
const stayButton = document.querySelector(".stay")
const betButton = document.querySelector(".bet")
const wager = document.querySelector(".wager")
const wagerAmount = document.querySelector(".amount")
const message = document.querySelector(".message")    
const cardSuit = document.querySelector(".suit")
const cardRank = document.getElementsByClassName("rank")
// console.log(message.textContent)

init()

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

function sum(){
    playerHand
}
                    //Click handler for buttons
    
//initializes the game table to begin a new game
startButton.addEventListener("click", ()=>{
    if(wagerAmount.textContent === '0'){
        message.textContent = "Must place wager before start!"
    }
    else{
        message.textContent = ""
        dealDealerCards()
        dealPlayerCards()
        removeCards()
        console.log(playerHand)
        console.log(dealerHand)
        console.log(deck)
    }
})

//Lets you place the bet 
betButton.addEventListener("click", ()=>{
    wagerAmount.textContent = wager.value
    wager.value = 0
})

//Allows player to draw new card
hitButton.addEventListener("click", ()=>{
    hit()
    console.log(playerHand)
    console.log(deck)
})
function hit(){
    for(let i = 0; i < 1; i++){
        playerHand.push(deck[Math.floor(Math.random() * deck.length)])
    }
    deck.splice(deck.indexOf(playerHand[playerHand.length - 1].toString()), 1)
}

//Starts the game table fresh
function init(){
    message.textContent = ""
    wagerAmount.textContent = 0;
    wager.value = 0;
    moneyEarned = 0;
    handSum = 0;
    winner = null
    deckFill()
    playerHand = []
    dealerHand = []
}

// dealPlayerCards()
// dealDealerCards()
// removeCards()
console.log(playerHand)
console.log(dealerHand)
console.log(deck)