//Deck of 52 cards. The face cards are hard coded while a for loop fills in the other cards.
const deck = ["sK", "cK", "hK", "dK", "sQ", "cQ", "hQ", "dQ", "sJ", "cJ", "hJ", "dJ", "sA", "cA", "hA", "dA"]

//Variables
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
const moneyEarned = document.querySelector(".money-earned")
const dealerContainer = document.querySelector('.hands.dealer')
const playerContainer = document.querySelector('.hands.player')

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
        //if only 2 cards are in hand, this runs
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

        if(playerSum.textContent > 21){
            message.textContent = "BUST! YOU LOSE JIVE TURKEY"
            setTimeout(()=>{
                init()
              }, 15000);
        }
        else if(playerSum.textContent === 21){
            moneyEarned.textContent = moneyEarned.textContent + (wagerAmount.textContent * 3)
            message.textContent = `BLACK JACK! You won ${moneyEarned.textContent}$`
            setTimeout(()=>{
                init()
            }, 15000);
        }
    }

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
        console.log(deck)
        console.log(playerHand)
        console.log(dealerHand)
        removeCards()
        sum(playerHand, playerHandSum, playerSum)
        sum(dealerHand, dealerHandSum, dealerSum)
    }
    renderCard(playerHand, playerContainer)
    renderCard(dealerHand, dealerContainer)
})

stayButton.addEventListener("click", ()=>{
    message.textContent = "Dealers turn"

    for(let i = 0; i < 5; i++){
        if(dealerSum.textContent < 17){
            hit(dealerHand)
            renderNewCard(dealerHand, dealerContainer)
            sum(dealerHand, dealerHandSum, dealerSum)
            if(dealerSum.textContent >= 17){
                if(dealerSum.textContent === 21){
                    console.log(dealerSum.textContent)
                    message.textContent = "DEALER HAS 21, YOU LOSE!"
                    setTimeout(()=>{
                        init()
                    }, 15000);
                }
                if(dealerSum.textContent < 21){
                    if(dealerSum > playerSum){
                        message.textContent = `DEALER HAS ${dealerSum} YOU LOVE TO LOSE!`
                        setTimeout(()=>{
                            init()
                        }, 15000);
                    }
                    else{
                        moneyEarned.textContent = moneyEarned.textContent + (wagerAmount.textContent * 3)
                        message.textContent = `YOU WIN! DEALER HAS ${dealerSum.textContent}, YOU EARNED ${moneyEarned.textContent}$`
                        setTimeout(()=>{
                            init()
                        }, 15000);
                    }
                }
            }
        }
    }
    
    

})

//Lets you place the bet 
betButton.addEventListener("click", ()=>{
    message.textContent = ""
    if(wager.value < 0){
        return
    }
    else{
        wagerAmount.textContent = wager.value
        wager.value = '0'.substring(1)
    }
})

//Allows player to draw new card
hitButton.addEventListener("click", ()=>{
    if(playerHand[0] || dealerHand[0]){
        hit(playerHand)
        sum(playerHand, playerHandSum, playerSum)
        renderNewCard(playerHand, playerContainer)
    }
    else{
        return
    }
})
function hit(playerOrDealerHand){
    for(let i = 0; i < 1; i++){
        playerOrDealerHand.push(deck[Math.floor(Math.random() * deck.length)])
    }
    deck.splice(deck.indexOf(playerOrDealerHand[playerOrDealerHand.length - 1].toString()), 1)
}
    
function createCard(rank, suit, container) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    const rankElement = document.createElement('div');
    rankElement.classList.add('rank');
    rankElement.textContent = rank;

    const suitElement = document.createElement('div');
    suitElement.classList.add('suit');
    suitElement.innerHTML = suit;

    cardContainer.appendChild(rankElement);
    cardContainer.appendChild(suitElement);

    container.appendChild(cardContainer);
}

// Generate a card for the dealer and player
function renderCard(playerOrDealerHand, playerOrDealerCont){
    const render = []
    let cardSuit
    let cardRank

    for(let i = 0; i < playerOrDealerHand.length; i++){
        render.push(playerOrDealerHand[i].split(''))
    }

    for(let i = 0; i < render.length; i++){
        cardRank = render[i][1]
        if(render[i][0] === "d"){cardSuit = '&#9830;&#65039;'}
        if(render[i][0] === "c"){cardSuit = '&#9827;&#65039;'}
        if(render[i][0] === "h"){cardSuit = '&#9829;&#65039;'}
        if(render[i][0] === "s"){cardSuit = '&#9824;&#65039;'}
        if(render[i][2]){cardRank = 10}
        createCard(cardRank, cardSuit, playerOrDealerCont); 
    }
} 

function renderNewCard(playerOrDealerHand, playerOrDealerCont){
    const render = []
    let cardSuit
    let cardRank

    render.push(playerOrDealerHand[playerOrDealerHand.length - 1].split(''))

    for(let i = 0; i < render.length; i++){
        cardRank = render[i][1]
        if(render[i][0] === "d"){cardSuit = '&#9830;&#65039;'}
        if(render[i][0] === "c"){cardSuit = '&#9827;&#65039;'}
        if(render[i][0] === "h"){cardSuit = '&#9829;&#65039;'}
        if(render[i][0] === "s"){cardSuit = '&#9824;&#65039;'}
        if(render[i][2]){cardRank = 10}
        createCard(cardRank, cardSuit, playerOrDealerCont);; 
    }  
} 

//Starts the game table fresh
function init(){
    message.textContent = ""
    wagerAmount.textContent = 0;
    wager.value = 0;
    playerHandSum = 0;
    dealerHandSum = 0;
    winner = false
    playerSum.textContent = 0
    dealerSum.textContent = 0
    deckFill()
    playerHand = []
    dealerHand = []
}