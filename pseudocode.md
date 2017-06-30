# War Game Pseudocode

## Game Page

<p> Player Names: </p>

- Hold 'Player One: ' information in HTML
- Access that with DOM elements
- Request players to enter their names
- add textContent to player name variables depending on input

<p> Buttons: </p>

- Flip button only functions if each player has 1 or more cards left in their stack
    - cannot press flip button if a player has 0 cards
- War button only functions if the players have the **SAME** card
    - doesn't function if players have different cards
- Reset board works whenever it is pressed and resets the entire game

<p> Card Deck: </p>

- Initialize game by displaying two stacks of cards under each player's name
- Slice initial random deck into two into two arrays, leaving original deck untouched
- Display how many cards each player has left - 26 at start
- In between card deck, have button that flips top card on stack
- Hold stack of cards in array in a random order, and split it in half for each player
    - Use Math.random to put each card (not including joker) into the array
    - Use Math.random to split the array in half for each player
    - Flip the top card in a player's stack that is already in a random order
    - When two cards are flipped: 
        - If one card is higher than the other players':
            - Push that card to the end of your array
            - Remove their card from the top of their array
            - Push their card to the end of your array 
- If war is declared:
     - Flip top three cards upside down on bottom part of web page
     - Flip fourth card facing up
     - If one card is higher than other: 
        - Player gets all of those cards added to the end of the array
        - Cards get removed from person's array who has smaller card value
    - If there is less than 4 cards left: 
        - If user has 3 cards left:
            - Flip 2
            - Loop through to see how many cards are left
- Game is over when: 
    - A player has all 52 cards in the deck in their possession
    - Should display when player has 0 cards and when other player has 52
    - Winner's name should appear on the screen
- Ability to play again and reset board with a reset button


## Rules Page

<p> Display: </p>

- List of rules that players must follow
- Use simple HTML to display these rules
- Will not need any DOM manipulation