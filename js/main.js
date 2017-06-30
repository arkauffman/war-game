/*----- app's state (variables) -----*/
var cards, playerOneArr, playerTwoArr, playOneLength, playTwoLength;

/*----- event listeners -----*/
$('#flip').on('click', flipCard);

// war event listener
$('#war').on('click', war);

$('#reset').on('click', init); 

/*----- functions -----*/
init();

function render() {
    // display correct card
    $('#image1').attr('src', `${playerOneArr[0].cardImage}`);
    $('#image1').css('background-color', '#f4f5f7');
    $('#image2').attr('src', `${playerTwoArr[0].cardImage}`);
    $('#image2').css('background-color', '#f4f5f7');

    // display count
    $('#count1').html(`${playerOneArr.length}`);
    $('#count2').html(`${playerTwoArr.length}`);

    // handle display when card values are equal

}

function init() {

    $('#flip').on('click', flipCard);

    cards = [
        {
            value: 14,
            cardImage: "images/clubs/clubs-A.svg"
        },
        {
            value: 14,
            cardImage: "images/diamonds/diamonds-A.svg"
        },
        {
            value: 14,
            cardImage: "images/hearts/hearts-A.svg"
        },
        {
            value: 14,
            cardImage: "images/spades/spades-A.svg"
        },
         {
            value: 13,
            cardImage: "images/clubs/clubs-K.svg"
        },
        {
            value: 13,
            cardImage: "images/diamonds/diamonds-K.svg"
        },
        {
            value: 13,
            cardImage: "images/hearts/hearts-K.svg"
        },
        {
            value: 13,
            cardImage: "images/spades/spades-K.svg"
        },
         {
            value: 12,
            cardImage: "images/clubs/clubs-Q.svg"
        },
        {
            value: 12,
            cardImage: "images/diamonds/diamonds-Q.svg"
        },
        {
            value: 12,
            cardImage: "images/hearts/hearts-Q.svg"
        },
        {
            value: 12,
            cardImage: "images/spades/spades-Q.svg"
        },
         {
            value: 11,
            cardImage: "images/clubs/clubs-J.svg"
        },
        {
            value: 11,
            cardImage: "images/diamonds/diamonds-J.svg"
        },
        {
            value: 11,
            cardImage: "images/hearts/hearts-J.svg"
        },
        {
            value: 11,
            cardImage: "images/spades/spades-J.svg"
        },
         {
            value: 10,
            cardImage: "images/clubs/clubs-r10.svg"
        },
        {
            value: 10,
            cardImage: "images/diamonds/diamonds-r10.svg"
        },
        {
            value: 10,
            cardImage: "images/hearts/hearts-r10.svg"
        },
        {
            value: 10,
            cardImage: "images/spades/spades-r10.svg"
        },
         {
            value: 9,
            cardImage: "images/clubs/clubs-r09.svg"
        },
        {
            value: 9,
            cardImage: "images/diamonds/diamonds-r09.svg"
        },
        {
            value: 9,
            cardImage: "images/hearts/hearts-r09.svg"
        },
        {
            value: 9,
            cardImage: "images/spades/spades-r09.svg"
        },
         {
            value: 8,
            cardImage: "images/clubs/clubs-r08.svg"
        },
        {
            value: 8,
            cardImage: "images/diamonds/diamonds-r08.svg"
        },
        {
            value: 8,
            cardImage: "images/hearts/hearts-r08.svg"
        },
        {
            value: 8,
            cardImage: "images/spades/spades-r08.svg"
        },
         {
            value: 7,
            cardImage: "images/clubs/clubs-r07.svg"
        },
        {
            value: 7,
            cardImage: "images/diamonds/diamonds-r07.svg"
        },
        {
            value: 7,
            cardImage: "images/hearts/hearts-r07.svg"
        },
        {
            value: 7,
            cardImage: "images/spades/spades-r07.svg"
        },
         {
            value: 6,
            cardImage: "images/clubs/clubs-r06.svg"
        },
        {
            value: 6,
            cardImage: "images/diamonds/diamonds-r06.svg"
        },
        {
            value: 6,
            cardImage: "images/hearts/hearts-r06.svg"
        },
        {
            value: 6,
            cardImage: "images/spades/spades-r06.svg"
        },
         {
            value: 5,
            cardImage: "images/clubs/clubs-r05.svg"
        },
        {
            value: 5,
            cardImage: "images/diamonds/diamonds-r05.svg"
        },
        {
            value: 5,
            cardImage: "images/hearts/hearts-r05.svg"
        },
        {
            value: 5,
            cardImage: "images/spades/spades-r05.svg"
        },
         {
            value: 4,
            cardImage: "images/clubs/clubs-r04.svg"
        },
        {
            value: 4,
            cardImage: "images/diamonds/diamonds-r04.svg"
        },
        {
            value: 4,
            cardImage: "images/hearts/hearts-r04.svg"
        },
        {
            value: 4,
            cardImage: "images/spades/spades-r04.svg"
        },
         {
            value: 3,
            cardImage: "images/clubs/clubs-r03.svg"
        },
        {
            value: 3,
            cardImage: "images/diamonds/diamonds-r03.svg"
        },
        {
            value: 3,
            cardImage: "images/hearts/hearts-r03.svg"
        },
        {
            value: 3,
            cardImage: "images/spades/spades-r03.svg"
        },
         {
            value: 2,
            cardImage: "images/clubs/clubs-r02.svg"
        },
        {
            value: 2,
            cardImage: "images/diamonds/diamonds-r02.svg"
        },
        {
            value: 2,
            cardImage: "images/hearts/hearts-r02.svg"
        },
        {
            value: 2,
            cardImage: "images/spades/spades-r02.svg"
        }
    ];

    shuffle(cards);

    playerOneArr = cards.slice(0, (cards.length/2));
    playerTwoArr = cards.slice((cards.length/2), cards.length);

    playOneLength = playerOneArr.length;
    playTwoLength = playerTwoArr.length;

    $('#image1').attr('src', ``);
    $('#image2').attr('src', ``);
    $('#count1').html(`${playerOneArr.length}`);
    $('#count2').html(`${playerTwoArr.length}`);

    // $('#war').remove();
}

function flipCard() {
    render();
    // no longer able to flip card if either player has no cards left
    if (playerOneArr.length <= 0 || playerTwoArr.length <= 0) {
        return;
    }
    // check which card's value is higher
    if (playerOneArr[0].value > playerTwoArr[0].value) {
        // first move first card on pile to back of deck
        playerOneArr.push(playerOneArr[0]);
        playerOneArr.shift();
        // then move first card from player 2 to back of deck
        playerOneArr.push(playerTwoArr[0]);
        playerTwoArr.shift();
    } else if (playerOneArr[0].value < playerTwoArr[0].value) {
        // first move first card on pile to back of deck
        playerTwoArr.push(playerTwoArr[0]);
        playerTwoArr.shift();
        // then move first card from player 1 to back of deck
        playerTwoArr.push(playerOneArr[0]);
        playerOneArr.shift();
    } else if (playerOneArr[0].value === playerTwoArr[0].value) {
        $('#war').on('click', war);
        $('#flip').off('click', flipCard);

        // var warButton = ("<button id='war'>War</button>");
        // $('.button-format').append(warButton);
        //war();
    }
}

function warCardLength() {

    if (playOneLength >= 4) {
        if (playTwoLength >= 4) {
            playOneLength = 4;
            playTwoLength = 4;
        } else if (playTwoLength >= 3) {
            playOneLength = 4;
            playTwoLength = 3;
        } else if (playTwoLength >= 2) {
            playOneLength = 4;
            playTwoLength = 2;
        } else if (playTwoLength >= 1) {
            playOneLength = 4;
            playTwoLength = 1;
        }
    } else if (playOneLength >= 3) {
        if (playTwoLength >= 4) {
            playOneLength = 3;
            playTwoLength = 4;
        } else if (playTwoLength >= 3) {
            playOneLength = 3;
            playTwoLength = 3;
        } else if (playTwoLength >= 2) {
            playOneLength = 3;
            playTwoLength = 2;
        } else if (playTwoLength >= 1) {
            playOneLength = 3;
            playTwoLength = 1;
        }
    } else if (playOneLength >= 2) {
        if (playTwoLength >= 4) {
            playOneLength = 2;
            playTwoLength = 4;
        } else if (playTwoLength >= 3) {
            playOneLength = 2;
            playTwoLength = 3;
        } else if (playTwoLength >= 2) {
            playOneLength = 2;
            playTwoLength = 2;
        } else if (playTwoLength >= 1) {
            playOneLength = 2;
            playTwoLength = 1;
        }
    } else if (playeOneLength >= 1) {
        if (playTwoLength >= 4) {
            playOneLength = 1;
            playTwoLength = 4;
        } else if (playTwoLength >= 3) {
            playOneLength = 1;
            playTwoLength = 3;
        } else if (playTwoLength >= 2) {
            playOneLength = 1;
            playTwoLength = 2;
        } else if (playTwoLength >= 1) {
            playOneLength = 1;
            playTwoLength = 1;
        }
    }
}

function war () {
    console.log('war is declared')
    if (playerOneArr[0].value === playerTwoArr[0].value) {
        if (playerOneArr.length >= 4 && playerTwoArr.length >= 4) {
            $('#image1').attr('src', `${playerOneArr[4].cardImage}`);
                $('#image1').css('background-color', '#f4f5f7');
                $('#image2').attr('src', `${playerTwoArr[4].cardImage}`);
                $('#image2').css('background-color', '#f4f5f7');
            
                console.log('player 1');
                console.log(playerOneArr[0]);
                console.log(playerOneArr[1]);
                console.log(playerOneArr[2]);
                console.log(playerOneArr[3]);
                console.log(playerOneArr[4]);

                console.log('player 2');
                console.log(playerTwoArr[0]);
                console.log(playerTwoArr[1]);
                console.log(playerTwoArr[2]);
                console.log(playerTwoArr[3]);
                console.log(playerTwoArr[4]);

                if (playerOneArr[4].value > playerTwoArr[4].value) {

                    var takeOne = playerOneArr.splice(0, 5);
                    var takeTwo = playerTwoArr.splice(0, 5);

                    var newArr = takeOne.concat(takeTwo);
                    console.log('CONCAT');
                    console.log(newArr);
                    var newArrUpdate = playerOneArr.concat(newArr);
                    playerOneArr = newArrUpdate;

                    console.log('player 1 post');
                    console.log(playerOneArr);

                    console.log('player 2 lost post');
                    console.log(playerTwoArr);

                } else if (playerOneArr[4].value < playerTwoArr[4].value) {

                    var takeTwo = playerTwoArr.splice(0, 5);
                    var takeOne = playerOneArr.splice(0, 5);

                    var newArr = takeTwo.concat(takeOne);
                    console.log('CONCAT');
                    console.log(newArr);
                    var newArrUpdate = playerTwoArr.concat(newArr);
                    playerTwoArr = newArrUpdate;

                    console.log('player 2 post');
                    console.log(playerTwoArr);

                    console.log('player 1 lost post');
                    console.log(playerOneArr);
                } else if (playerOneArr[4].value === playerTwoArr[4].value) {
                    war();
                }

            } else if (playerOneArr.length >= 3 && playerTwoArr.length >= 3) {

                $('#image1').attr('src', `${playerOneArr[3].cardImage}`);
                $('#image1').css('background-color', '#f4f5f7');
                $('#image2').attr('src', `${playerTwoArr[3].cardImage}`);
                $('#image2').css('background-color', '#f4f5f7');
            
                console.log('player 1');
                console.log(playerOneArr[0]);
                console.log(playerOneArr[1]);
                console.log(playerOneArr[2]);
                console.log(playerOneArr[3]);

                console.log('player 2');
                console.log(playerTwoArr[0]);
                console.log(playerTwoArr[1]);
                console.log(playerTwoArr[2]);
                console.log(playerTwoArr[3]);

                if (playerOneArr[3].value > playerTwoArr[3].value) {

                    var takeOne = playerOneArr.splice(0, 4);
                    var takeTwo = playerTwoArr.splice(0, 4);

                    var newArr = takeOne.concat(takeTwo);
                    console.log('CONCAT');
                    console.log(newArr);
                    var newArrUpdate = playerOneArr.concat(newArr);
                    playerOneArr = newArrUpdate;

                    console.log('player 1 post');
                    console.log(playerOneArr);

                    console.log('player 2 lost post');
                    console.log(playerTwoArr);

                } else if (playerOneArr[3].value < playerTwoArr[3].value) {

                    var takeTwo = playerTwoArr.splice(0, 4);
                    var takeOne = playerOneArr.splice(0, 4);

                    var newArr = takeTwo.concat(takeOne);
                    console.log('CONCAT');
                    console.log(newArr);
                    var newArrUpdate = playerTwoArr.concat(newArr);
                    playerTwoArr = newArrUpdate;

                    console.log('player 2 post');
                    console.log(playerTwoArr);

                    console.log('player 1 lost post');
                    console.log(playerOneArr);
                } else if (playerOneArr[3].value === playerTwoArr[3].value) {
                    war();
                }

            } else if (playerOneArr.length >= 2 && playerTwoArr.length >= 2) {
                $('#image1').attr('src', `${playerOneArr[2].cardImage}`);
                $('#image1').css('background-color', '#f4f5f7');
                $('#image2').attr('src', `${playerTwoArr[2].cardImage}`);
                $('#image2').css('background-color', '#f4f5f7');
            
                console.log('player 1');
                console.log(playerOneArr[0]);
                console.log(playerOneArr[1]);
                console.log(playerOneArr[2]);

                console.log('player 2');
                console.log(playerTwoArr[0]);
                console.log(playerTwoArr[1]);
                console.log(playerTwoArr[2]);

                if (playerOneArr[2].value > playerTwoArr[2].value) {

                    var takeOne = playerOneArr.splice(0, 3);
                    var takeTwo = playerTwoArr.splice(0, 3);

                    var newArr = takeOne.concat(takeTwo);
                    console.log('CONCAT');
                    console.log(newArr);
                    var newArrUpdate = playerOneArr.concat(newArr);
                    playerOneArr = newArrUpdate;

                    console.log('player 1 post');
                    console.log(playerOneArr);

                    console.log('player 2 lost post');
                    console.log(playerTwoArr);

                } else if (playerOneArr[2].value < playerTwoArr[2].value) {

                    var takeTwo = playerTwoArr.splice(0, 3);
                    var takeOne = playerOneArr.splice(0, 3);

                    var newArr = takeTwo.concat(takeOne);
                    console.log('CONCAT');
                    console.log(newArr);
                    var newArrUpdate = playerTwoArr.concat(newArr);
                    playerTwoArr = newArrUpdate;

                    console.log('player 2 post');
                    console.log(playerTwoArr);

                    console.log('player 1 lost post');
                    console.log(playerOneArr);
                } else if (playerOneArr[2].value === playerTwoArr[2].value) {
                    war();
                }
            } else if (playerOneArr.length >= 1 && playerTwoArr.length >= 1) {
                $('#image1').attr('src', `${playerOneArr[1].cardImage}`);
                $('#image1').css('background-color', '#f4f5f7');
                $('#image2').attr('src', `${playerTwoArr[1].cardImage}`);
                $('#image2').css('background-color', '#f4f5f7');
            
                console.log('player 1');
                console.log(playerOneArr[0]);
                console.log(playerOneArr[1]);

                console.log('player 2');
                console.log(playerTwoArr[0]);
                console.log(playerTwoArr[1]);

                if (playerOneArr[1].value > playerTwoArr[1].value) {

                    var takeOne = playerOneArr.splice(0, 2);
                    var takeTwo = playerTwoArr.splice(0, 2);

                    var newArr = takeOne.concat(takeTwo);
                    console.log('CONCAT');
                    console.log(newArr);
                    var newArrUpdate = playerOneArr.concat(newArr);
                    playerOneArr = newArrUpdate;

                    console.log('player 1 post');
                    console.log(playerOneArr);

                    console.log('player 2 lost post');
                    console.log(playerTwoArr);

                } else if (playerOneArr[1].value < playerTwoArr[1].value) {

                    var takeTwo = playerTwoArr.splice(0, 2);
                    var takeOne = playerOneArr.splice(0, 2);

                    var newArr = takeTwo.concat(takeOne);
                    console.log('CONCAT');
                    console.log(newArr);
                    var newArrUpdate = playerTwoArr.concat(newArr);
                    playerTwoArr = newArrUpdate;

                    console.log('player 2 post');
                    console.log(playerTwoArr);

                    console.log('player 1 lost post');
                    console.log(playerOneArr);
                } else if (playerOneArr[1].value === playerTwoArr[1].value) {
                    war();
                }

            }

        } 
    $('#flip').on('click', flipCard);
    $('#war').off('click', war);
}

function shuffle(arr) {
    var currIndex = arr.length, temp, randIndex;

    // loop the array and randomize
    while (currIndex > 0) {
        randIndex = Math.floor(Math.random() * currIndex);
        currIndex -= 1;

        //swap
        temp = arr[currIndex];
        arr[currIndex] = arr[randIndex];
        arr[randIndex] = temp;
    }
    return arr;
}