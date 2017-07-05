/*----- app's state (variables) -----*/
var cards, playerOneArr, playerTwoArr;

/*----- event listeners -----*/
$('#flip').on('click', flipCard);

// war event listener
$('#war').on('click', war);

$('#reset').on('click', init); 

/*----- functions -----*/
init();
// render();

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

    // playerOneArr = cards.slice(0, 1);
    // playerTwoArr = cards.slice(10, 12);

    $('#image1').attr('src', ``);
    $('#image2').attr('src', ``);
    $('#count1').html(`${playerOneArr.length}`);
    $('#count2').html(`${playerTwoArr.length}`);
}

function render() {
    if (playerOneArr.length === 0) {
        console.log('PLAYER 1 LOST');
        $('#count2').html("WINNER!").css('color', '#4682b4');
        $('#count1').html('0');
        $('#war').off('click', war);
        $('#flip').off('click', flipCard);
    } else if (playerTwoArr.length === 0) {
        console.log('PLAYER 2 LOST')
        $('#count1').html("WINNER!").css('color', '#4682b4');
        $('#count2').html('0');
        $('#war').off('click', war);
        $('#flip').off('click', flipCard);
    } else {
        // display correct card
        $('#image1').attr('src', `${playerOneArr[0].cardImage}`);
        $('#image1').css('background-color', '#f4f5f7');
        $('#image2').attr('src', `${playerTwoArr[0].cardImage}`);
        $('#image2').css('background-color', '#f4f5f7');

        // display count
        $('#count1').html(`${playerOneArr.length}`);
        $('#count2').html(`${playerTwoArr.length}`);
    }
}

function flipCard() {
    render();
    // no longer able to flip card if either player has no cards left
    if (playerOneArr.length <= 0 || playerTwoArr.length <= 0) return;
 
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
    }
}

function war () {
    console.log('war is declared')
    var playVal = 0;
    if (playerOneArr.length >= 4 && playerTwoArr.length >= 4) {
        playVal = 4;
    } else if (playerOneArr.length >= 3 && playerTwoArr.length >= 3) {
        playVal = 3;
    } else if (playOneArr.length >= 2 && playerTwoArr.length >= 2) {
        playVal = 2;
    } else if (playerOneArr.length >= 1 && playerTwoArr.length >= 1) {
        playVal = 1;
    }

    if (playerOneArr[0].value === playerTwoArr[0].value) {
        if (playerOneArr.length >= playVal && playerTwoArr.length >= playVal) {
            $('#image1').attr('src', `${playerOneArr[playVal].cardImage}`);
            $('#image1').css('background-color', '#f4f5f7');
            $('#image2').attr('src', `${playerTwoArr[playVal].cardImage}`);
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

            if (playerOneArr[playVal].value > playerTwoArr[playVal].value) {

                var takeOne = playerOneArr.splice(0, playVal + 1);
                var takeTwo = playerTwoArr.splice(0, playVal + 1);

                var newArr = takeOne.concat(takeTwo);
                console.log('CONCAT');
                console.log(newArr);
                var newArrUpdate = playerOneArr.concat(newArr);
                playerOneArr = newArrUpdate;

                console.log('player 1 post');
                console.log(playerOneArr);
                console.log('player 2 lost post');
                console.log(playerTwoArr);

            } else if (playerOneArr[playVal].value < playerTwoArr[playVal].value) {
                var takeTwo = playerTwoArr.splice(0, playVal + 1);
                var takeOne = playerOneArr.splice(0, playVal + 1);

                var newArr = takeTwo.concat(takeOne);
                console.log('CONCAT');
                console.log(newArr);
                var newArrUpdate = playerTwoArr.concat(newArr);
                playerTwoArr = newArrUpdate;

                console.log('player 2 post');
                console.log(playerTwoArr);
                console.log('player 1 lost post');
                console.log(playerOneArr);
            } else if (playerOneArr[playVal].value === playerTwoArr[playVal].value) {
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