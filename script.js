//Deck of 52 cards. The face cards are hard coded while a for loop fills in the other cards.
const deck = ["sK", "cK", "hK", "dK", "sQ", "cQ", "hQ", "dQ", "sJ", "cJ", "hJ", "dJ", "sA", "cA", "hA", "dA"]

//Variables
let moneyEarned
let playerHandSum
let dealerHandSum
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
const playerSum = document.querySelector(".player-sum")
const dealerSum = document.querySelector(".dealer-sum")

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

    //gives a total value of cards in hand
    function sum(playerOrDealerHand, playerOrDealerSum, playOrDealSum){
        let sumArr = []
        //if only 2 cards are in hand run this
        if(!playerOrDealerHand[2]){
            for(let i = 0; i < playerOrDealerHand.length; i++){
                sumArr.push(playerOrDealerHand[i].split(''))
            }

            for(let i = 0; i < sumArr.length; i++){
                if(sumArr[i][1] === "K" || sumArr[i][1] === "Q" || sumArr[i][1] === "J"){
                    playerOrDealerSum += 10
                    playOrDealSum.textContent = playerOrDealerSum
                }
                else if(sumArr[i][1] === "A"){
                    playerOrDealerSum += 11
                    playOrDealSum.textContent = playerOrDealerSum
                }
                else if(sumArr[i][2]){
                    playerOrDealerSum += 10
                    playOrDealSum.textContent = playerOrDealerSum
                }
                else{
                    playerOrDealerSum += parseInt(sumArr[i][1])
                    playOrDealSum.textContent = playerOrDealerSum
                }
            }  
        }
        //If more than 2 or more cards then run this
        else if(playerOrDealerHand[2]) {
            for(let i = 0; i < playerOrDealerHand.length; i++){
            sumArr.push(playerOrDealerHand[i].split(''))
            }
        
            for(let i = 0; i < sumArr.length; i++){
                if(sumArr[i][1] === "K" || sumArr[i][1] === "Q" || sumArr[i][1] === "J"){
                    playerOrDealerSum += 10
                    playOrDealSum.textContent = playerOrDealerSum
                }
                else if(sumArr[i][2]){
                    playerOrDealerSum += 10
                    playOrDealSum.textContent = playerOrDealerSum
                }
                else if(sumArr[i][1] === "A"){
                    if(playerOrDealerSum + 11 > 21){
                        playerOrDealerSum += 1
                        playOrDealSum.textContent = playerOrDealerSum
                    }
                    else{
                        playerOrDealerSum += 11
                        playOrDealSum.textContent = playerOrDealerSum    
                    }
                }
                else{
                    playerOrDealerSum += parseInt(sumArr[i][1])
                    playOrDealSum.textContent = playerOrDealerSum
                }
            }
            
        }
        //If theres an ace in hand and total value is over 21 then ace equals 1 
        for(let i = 0; i < sumArr.length; i++){
            if(sumArr[i][1].includes('A')){
                playerOrDealerSum -= 10
                playOrDealSum.textContent = playerOrDealerSum
            }
        }
        console.log(playerOrDealerSum)
        if(playerOrDealerSum > 21){
            message.textContent = "BUST!"
        }
        else if(playerOrDealerSum === 21){
            message.textContent = "BLACK JACK"
        }
    }
    
    //Click handler for buttons

//initializes the game table to begin a new game
startButton.addEventListener("click", ()=>{
    if(playerHand[0]){
        return
    }
    else if(wagerAmount.textContent === '0'){
        message.textContent = "Must place wager before start!"
    }
    else{
        message.textContent = ""
        dealDealerCards()
        dealPlayerCards()
        console.log(playerHand)
        console.log(dealerHand)
        removeCards()
        sum(playerHand, playerHandSum, playerSum)
        sum(dealerHand, dealerHandSum, dealerSum)
    }
})

//Lets you place the bet 
betButton.addEventListener("click", ()=>{
    if(wager.value < 0){
        return
    }
    else{
        wagerAmount.textContent = wager.value
        wager.value = 0
    }
})

//Allows player to draw new card
hitButton.addEventListener("click", ()=>{
    if(playerHand[0] || dealerHand[0]){
        hit()
        console.log(playerHand)
        sum(playerHand, playerHandSum, playerSum)
    }
    else{
        return
    }
})
function hit(){
    if(message === ""){
        for(let i = 0; i < 1; i++){
            playerHand.push(deck[Math.floor(Math.random() * deck.length)])
        }
        deck.splice(deck.indexOf(playerHand[playerHand.length - 1].toString()), 1)
    }
    else if(message === "BUST!" || message === "BLACK JACK!"){
        return
    }
}

//Starts the game table fresh
function init(){
    message.textContent = ""
    wagerAmount.textContent = 0;
    wager.value = 0;
    moneyEarned = 0;
    playerHandSum = 0;
    dealerHandSum = 0;
    winner = null
    deckFill()
    playerHand = []
    dealerHand = []
}