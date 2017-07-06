/*----- app's state (variables) -----*/
var cards, playerOneArr, playerTwoArr, playVal; 
var playOneScore = 0;
var playTwoScore = 0;

/*----- event listeners -----*/
$('#reset').on('click', init); 

/*----- functions -----*/
init();

function init() {

    $('#flip').on('click', flipCard);
    $('#war').off('click', war);

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

    $('#image1').attr('src', ``);
    $('#image2').attr('src', ``);
    $('#count1').html('').css('color', '#2f4f4f');
    $('#count2').html('').css('color', '#2f4f4f');
    $('#win1').css('border-bottom', '0px');
    $('#win2').css('border-bottom', '0px');
}

function render() {
    if (playerOneArr.length === 0) {
        $('#count2').html("WINNER!").css('color', '#708090');
        $('#count1').html('0').css('color', '#708090');
        playTwoScore++;
        $('#score2').html(` ${playTwoScore}`).css('color', '#708090');
        $('#score1').html(` ${playOneScore}`).css('color', '#708090');
        $('#flip').off('click', flipCard);
    } else if (playerTwoArr.length === 0) {
        $('#count1').html("WINNER!").css('color', '#708090');
        $('#count2').html('0').css('color', '#708090');
        playOneScore++;
        $('#score1').html(` ${playOneScore}`).css('color', '#708090');
        $('#score2').html(` ${playTwoScore}`).css('color', '#708090');
        $('#flip').off('click', flipCard);
    } else {
        $('#image1').attr('src', `${playerOneArr[0].cardImage}`);
        $('#image1').css('background-color', '#f4f5f7');
        $('#image2').attr('src', `${playerTwoArr[0].cardImage}`);
        $('#image2').css('background-color', '#f4f5f7');
        $('#count1').html(`${playerOneArr.length}`);
        $('#count2').html(`${playerTwoArr.length}`);
    }
}

function flipCard() {
    playVal = 0;
    render();
    if (playerOneArr.length <= 0 || playerTwoArr.length <= 0) return;

    if (playerOneArr[0].value > playerTwoArr[0].value) {
        // first move first card on pile to back of deck
        $('#win1').css('border-bottom', '3px solid #2f4f4f');
        $('#win2').css('border-bottom', '0px');
        playerOneArr.push(playerOneArr[0]);
        playerOneArr.shift();
        // then move first card from player 2 to back of deck
        playerOneArr.push(playerTwoArr[0]);
        playerTwoArr.shift();
    } else if (playerOneArr[0].value < playerTwoArr[0].value) {
        $('#win2').css('border-bottom', '3px solid #2f4f4f');
        $('#win1').css('border-bottom', '0px');
        // first move first card on pile to back of deck
        playerTwoArr.push(playerTwoArr[0]);
        playerTwoArr.shift();
        // then move first card from player 1 to back of deck
        playerTwoArr.push(playerOneArr[0]);
        playerOneArr.shift();
    } else if (playerOneArr[0].value === playerTwoArr[0].value) {
        $('#flip').off('click', flipCard);
        $('#war').on('click', war);
    }
}

function war() {
    var sourceDeck, targetDeck;
    $('#flip').on('click', flipCard);
    $('#war').off('click', war);

    if (playerOneArr.length - playVal >= 5 && playerTwoArr.length - playVal >= 5) {
        playVal = playVal + 4;
    } else if (playerOneArr.length - playVal >= 4 && playerTwoArr.length - playVal >= 4) {
        playVal = playVal + 3;
    } else if (playerOneArr.length - playVal >= 3 && playerTwoArr.length - playVal >= 3) {
        playVal = playVal + 2;
    } else if (playerOneArr.length - playVal >= 2 && playerTwoArr.length - playVal >= 2) {
        playVal = playVal + 1;
    } 
    else {
        sourceDeck = playerOneArr.length > playerTwoArr.length ? playerOneArr : playerTwoArr;
        targetDeck = playerOneArr === sourceDeck ? playerTwoArr : playerOneArr;
        sourceDeck.push(...targetDeck);
        targetDeck.length = 0;
        return render();
    }

    $('#image1').attr('src', `${playerOneArr[playVal].cardImage}`);
    $('#image1').css('background-color', '#f4f5f7');
    $('#image2').attr('src', `${playerTwoArr[playVal].cardImage}`);
    $('#image2').css('background-color', '#f4f5f7');
   
    if (playerOneArr[playVal].value === playerTwoArr[playVal].value) {
        $('#flip').off('click', flipCard);
        $('#war').on('click', war);
    } else {
        targetDeck = (playerOneArr[playVal].value > playerTwoArr[playVal].value) ? playerOneArr : playerTwoArr;
        sourceDeck = (targetDeck === playerOneArr) ? playerTwoArr : playerOneArr;
        targetDeck.push(...sourceDeck.splice(0, playVal + 1));
        targetDeck.push(...targetDeck.splice(0, playVal + 1));
        playVal = 0;
        return;
    }
}

function shuffle(arr) {
    var currIndex = arr.length, temp, randIndex;
    while (currIndex > 0) {
        randIndex = Math.floor(Math.random() * currIndex);
        currIndex -= 1;
        temp = arr[currIndex];
        arr[currIndex] = arr[randIndex];
        arr[randIndex] = temp;
    }
    return arr;
}