## Project Choice (Tell us which project you're doing!)

- [ ] Flash Cards
- [ ] Trivia (Self-scoring)
- [ ] Spaceman
- [ ] Tower of Hanoi
- [x] Black Jack

## Project Description 

My app is called Black Jack. It's a game app for players who want to play Tic Tac Toe online. Two players can join an online game and play a round of Tic Tac Toe, with the score being kept automatically and game results displayed at then end of a round -- whichever player won, or in the case of a draw, a tie between the users. Users will have the option to play again. In the future, I'd like to add a feature where more than one person plays simultaniously. 

## Wire Frames

## Pseudo Code

1.Define required constants:
    1.1) An array that holds 52 cards. ie..S1,s2,s3,s4,d1,d2(For styling purposes). when a card is requested it is pushed to an array that holds the player or dealers hand.
    
2.Define variables used to track the game state:
    2.1) A wager variable to keep track of the wager placed.
    2.2) A variable to count money earned from wagers.
    2.3) A variable for the winner thats set to null by default. Its changed to dealer or winner depending on who won or no winner.
    2.4) A variable for each hands sum.
    2.5) a variable for that renders a message to announce the game results. (money earned, win or draw) 

3.Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
    3.1) An array for the cards in players hand and another for dealers hand. Upon initializing 2 cards are immediately drawn from the cards object. It will be rendered on the game table.

4.Loading Phase:
    4.1) The winner should be set to null.
    4.2) message variable is set to "place a wager before start"
    4.3) sum should be set to 0.
    4.4) wager count should be set to 0.
    4.5) card in hand arrays are also 0 for player and dealer.


5.Click handlers:
    5.1) Card in hand arrays will get 2 cards each when the start button is clicked.
    5.1.2) When start button is pressed a function to add the cards in hand initiates.
    5.2) Start button wont work until a wager is made. if wager variable equals 0 then start doesnt work.
    5.3) Message variable is set to empty string after start button is pressed.

**Initial Landing View**

![image](https://media.git.generalassemb.ly/user/21811/files/0f7aee00-c1d9-11ea-9dad-de086a5c91fc)

**Results View**

![image](https://media.git.generalassemb.ly/user/21811/files/1a358300-c1d9-11ea-95da-6c14aefb0f18)

## User Stories

#### MVP Goals

- As a player, I want my game to recognize three ticks in a row so that I know who won.
- As a player, I would like to be informed when the game is over due to a tie.
- As a player, I would like to know whose turn it is so that I don't have to keep track.
- As a player, I would like to be informed with some indication when I mark a game box so that I know my selection worked.
- As a player who requires assistive technologies, I would like accessibility features so that I'm not left out of enjoying the game.
- As a player I would like to be able to restart the game after a win, loss or tie.
- As a player, I want the UI to be engaging and out of the way so that I enjoy the experience of playing the game.\*\*

#### Stretch Goals

- As a player, I would like a victory animation when I win the game, so that I feel good about my victory!
- As a player, I would like to hear an audible sound when I mark a game box so that I know my selection worked.
- As a player, I would like to play this game online so that I don't have to have my challenger sitting next to me.
- As a player who wants to dominate the battlefield I want to become the ultimate tic tac toe tactician so I can beat all of my opponents

#### Notionboard Template
Notionboard template for building projects ( You can use this for any project )
https://www.notion.so/GA-Unit-3-Tunr-Lab-da2c82fafd4e4a7aa654676732db9ee3

#### Timeline - Daily Accountability
Example of a Timeline to keep organized and on task for hitting goals every single day you’re on the sprint for your project.

Create your own table using this markdown table generator website:
https://www.tablesgenerator.com/markdown_tables

Do not neglect to plan, you will thank yourself later for being proactive!
| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Thursday   |   | Create and present proposal        |          |                 |
| Friday     |   | Create html, js, css files         |          |                 |
| Saturday   |   | Create basic scaffolding           |          |                 |
| Sunday     |   | Add functionality                  |          |                 |
| Monday     |   | Add styling                        |          |                 |
| Tuesday    |   | Finaliza MVP                       |          |                 |
| Wedenesday |   | Work on stretch goals              |          |                 |
| Thursday   |   | Work on icebox items if applicable |          |                 |
| Friday     |   | Presentation Day!                  |          |                 |
|            |   |                                    |          |                 |