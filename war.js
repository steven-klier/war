// Players
let player1Deck = []
let player2Deck = []

// Deck
let deck = [
    {card: '2', suit: 'heart', value: 2},
    {card: '2', suit: 'spade', value: 2},
    {card: '2', suit: 'diamond', value: 2},
    {card: '2', suit: 'clubs', value: 2},
    {card: '3', suit: 'heart', value: 3},
    {card: '3', suit: 'spade', value: 3},
    {card: '3', suit: 'diamond', value: 3},
    {card: '3', suit: 'clubs', value: 3},
    {card: '4', suit: 'heart', value: 4},
    {card: '4', suit: 'spade', value: 4},
    {card: '4', suit: 'diamond', value: 4},
    {card: '4', suit: 'clubs', value: 4},
    {card: '5', suit: 'heart', value: 5},
    {card: '5', suit: 'spade', value: 5},
    {card: '5', suit: 'diamond', value: 5},
    {card: '5', suit: 'clubs', value: 5},
    {card: '6', suit: 'heart', value: 6},
    {card: '6', suit: 'spade', value: 6},
    {card: '6', suit: 'diamond', value: 6},
    {card: '6', suit: 'clubs', value: 6},
    {card: '7', suit: 'heart', value: 7},
    {card: '7', suit: 'spade', value: 7},
    {card: '7', suit: 'diamond', value: 7},
    {card: '7', suit: 'clubs', value: 7},
    {card: '8', suit: 'heart', value: 8},
    {card: '8', suit: 'spade', value: 8},
    {card: '8', suit: 'diamond', value: 8},
    {card: '8', suit: 'clubs', value: 8},
    {card: '9', suit: 'heart', value: 9},
    {card: '9', suit: 'spade', value: 9},
    {card: '9', suit: 'diamond', value: 9},
    {card: '9', suit: 'clubs', value: 9},
    {card: '10', suit: 'heart', value: 10},
    {card: '10', suit: 'spade', value: 10},
    {card: '10', suit: 'diamond', value: 10},
    {card: '10', suit: 'clubs', value: 10},
    {card: 'J', suit: 'heart', value: 11},
    {card: 'J', suit: 'spade', value: 11},
    {card: 'J', suit: 'diamond', value: 11},
    {card: 'J', suit: 'clubs', value: 11},
    {card: 'Q', suit: 'heart', value: 12},
    {card: 'Q', suit: 'spade', value: 12},
    {card: 'Q', suit: 'diamond', value: 12},
    {card: 'Q', suit: 'clubs', value: 12},
    {card: 'K', suit: 'heart', value: 13},
    {card: 'K', suit: 'spade', value: 13},
    {card: 'K', suit: 'diamond', value: 13},
    {card: 'K', suit: 'clubs', value: 13},
    {card: 'A', suit: 'heart', value: 14},
    {card: 'A', suit: 'spade', value: 14},
    {card: 'A', suit: 'diamond', value: 14},
    {card: 'A', suit: 'clubs', value: 14},
]

// Functions

function shuffle (deck) {
    let currentIndex = deck.length - 1
    let randomIndex
    let temporary

    for (let i = currentIndex; i > 0; i-- ) {
        randomIndex = Math.floor(Math.random() * i)
        temporary = deck[i]
        deck[i] = deck[randomIndex]
        deck[randomIndex] = temporary
    }
    return deck
}

function dealCards () {
    deck.forEach(function (card) {
        if (deck.indexOf(card) === 0 || deck.indexOf(card) % 2 === 0) {
            player1Deck.push(card)
        }
        if (deck.indexOf(card) % 2 !== 0) {
            player2Deck.push(card)
        }
    })
}

// When both players have the same card
let battle = (previous1, previous2) => {
    let player1Battle = previous1
    let player2Battle = previous2

    for (let i = 0; i < 4; i++) {
        player1Battle.push(player1Deck.pop())
        player2Battle.push(player2Deck.pop())
    }

    let displayPlayer1 = []
    let displayPlayer2 = []

    player1Battle.forEach(function (card) {
        displayPlayer1.push(card.card)
    })
    player2Battle.forEach(function (card) {
        displayPlayer2.push(card.card)
    })

    console.log(`${displayPlayer1} vs. ${displayPlayer2}`)
    document.querySelector('#player1').innerHTML = ` ${displayPlayer1}`
    document.querySelector('#player2').innerHTML = ` ${displayPlayer2}`

    for (let i = displayPlayer1.length - 4; i < displayPlayer1.length; i++) {
        let battleCard = document.createElement('img')
        let battleCardName = player1Battle[i].card
        let battleCardSuit = player1Battle[i].suit
        battleCard.setAttribute("src", `images/${battleCardName}-${battleCardSuit}.png`)
        battleCard.setAttribute("class", "battleCard")
        battleCard.setAttribute("width", "15%")
        document.querySelector('#card1-div').appendChild(battleCard)
    }

    for (let i = displayPlayer2.length - 4; i < displayPlayer2.length; i++) {
        let battleCard = document.createElement('img')
        let battleCardName = player2Battle[i].card
        let battleCardSuit = player2Battle[i].suit
        battleCard.setAttribute("src", `images/${battleCardName}-${battleCardSuit}.png`)
        battleCard.setAttribute("width", "15%")
        battleCard.setAttribute("class", "battleCard")
        document.querySelector('#card2-div').appendChild(battleCard)
    }

    if (player1Battle[player1Battle.length - 1].value > player2Battle[player2Battle.length - 1].value) {
        player1Battle.forEach(function (card) {
            player1Deck.unshift(card)
        })
        player2Battle.forEach(function (card) {
            player1Deck.unshift(card)
        })
        document.querySelector('#winner').innerHTML = 'Player 1 wins!'
    }
    if (player1Battle[player1Battle.length - 1].value < player2Battle[player2Battle.length - 1].value) {
        player1Battle.forEach(function (card) {
            player2Deck.unshift(card)
        })
        player2Battle.forEach(function (card) {
            player2Deck.unshift(card)
        })
        document.querySelector('#winner').innerHTML = 'Player 2 wins!'
    }
    if (player1Battle[player1Battle.length - 1].value === player2Battle[player2Battle.length - 1].value) {
        battle(player1Battle, player2Battle)
    }
}

// Comparing cards to see who wins
function compareCards () {
    let player1 = player1Deck.pop()
    let player2 = player2Deck.pop()

    document.querySelector('#player1').innerHTML = ` ${player1.card}`
    document.querySelector('#card-img1').setAttribute("src", `images/${player1.card}-${player1.suit}.png`)
    document.querySelector('#player2').innerHTML = ` ${player2.card}`
    document.querySelector('#card-img2').setAttribute("src", `images/${player2.card}-${player2.suit}.png`)

    if (player1.value > player2.value) {
        player1Deck.unshift(player1)
        player1Deck.unshift(player2)
        document.querySelector('#winner').innerHTML = 'Player 1 wins!'
        document.querySelector('.plus1-1').innerHTML = '+1'
        document.querySelector('.plus1-2').innerHTML = '-1'
        jQuery(document).ready(function () {
            $(".plus1-1").fadeIn().delay(200).fadeOut();
            $(".plus1-2").fadeIn().delay(200).fadeOut();  
        });
        
    } else if (player2.value > player1.value) {
        player2Deck.unshift(player1)
        player2Deck.unshift(player2)
        document.querySelector('#winner').innerHTML = 'Player 2 wins!'
        document.querySelector('.plus1-2').innerHTML = '+1'
        document.querySelector('.plus1-1').innerHTML = '-1'
        jQuery(document).ready(function () {
            $(".plus1-2").fadeIn().delay(200).fadeOut();
            $(".plus1-1").fadeIn().delay(200).fadeOut();  
        });
    } else {
        
        let player1Battle = [player1]
        let player2Battle = [player2]
        
        for (let i = 0; i < 4; i++) {
            player1Battle.push(player1Deck.pop())
            player2Battle.push(player2Deck.pop())
        }

        let displayPlayer1 = []
        let displayPlayer2 = []

        player1Battle.forEach(function (card) {
            displayPlayer1.push(card.card)
        })
        player2Battle.forEach(function (card) {
            displayPlayer2.push(card.card)
        })

        console.log(`${displayPlayer1} vs. ${displayPlayer2}`)
        document.querySelector('#player1').innerHTML = ` ${displayPlayer1}`
        document.querySelector('#player2').innerHTML = ` ${displayPlayer2}`

        for (let i = 1; i < displayPlayer1.length; i++) {
            let battleCard = document.createElement('img')
            let battleCardName = player1Battle[i].card
            let battleCardSuit = player1Battle[i].suit
            battleCard.setAttribute("src", `images/${battleCardName}-${battleCardSuit}.png`)
            battleCard.setAttribute("class", "battleCard")
            battleCard.setAttribute("width", "15%")
            document.querySelector('#card1-div').appendChild(battleCard)
        }

        for (let i = 1; i < displayPlayer2.length; i++) {
            let battleCard = document.createElement('img')
            let battleCardName = player2Battle[i].card
            let battleCardSuit = player2Battle[i].suit
            battleCard.setAttribute("src", `images/${battleCardName}-${battleCardSuit}.png`)
            battleCard.setAttribute("width", "15%")
            battleCard.setAttribute("class", "battleCard")
            document.querySelector('#card2-div').appendChild(battleCard)
        }

        if (player1Battle[player1Battle.length - 1].value > player2Battle[player2Battle.length - 1].value) {
            player1Battle.forEach(function (card) {
                player1Deck.unshift(card)
            })
            player2Battle.forEach(function (card) {
                player1Deck.unshift(card)
            })
            document.querySelector('#winner').innerHTML = 'Player 1 wins!'
            document.querySelector('.plus1-1').innerHTML = `+${player1Battle.length}`
            document.querySelector('.plus1-2').innerHTML = `-${player1Battle.length}`
            jQuery(document).ready(function () {
                $(".plus1-1").fadeIn().delay(200).fadeOut();
                $(".plus1-2").fadeIn().delay(200).fadeOut();   
            });
        }
        if (player1Battle[player1Battle.length - 1].value < player2Battle[player2Battle.length - 1].value) {
            player1Battle.forEach(function (card) {
                player2Deck.unshift(card)
            })
            player2Battle.forEach(function (card) {
                player2Deck.unshift(card)
            })
            document.querySelector('#winner').innerHTML = 'Player 2 wins!'
            document.querySelector('.plus1-2').innerHTML = `+${player1Battle.length}`
            document.querySelector('.plus1-1').innerHTML = `-${player1Battle.length}`
            jQuery(document).ready(function () {
                $(".plus1-2").fadeIn().delay(200).fadeOut();
                $(".plus1-1").fadeIn().delay(200).fadeOut();  
            });
        }
        if (player1Battle[player1Battle.length - 1].value === player2Battle[player2Battle.length - 1].value) {
            battle(player1Battle, player2Battle)
        }

    }
    
}

document.querySelector('#btn').addEventListener('click', function () {
    jQuery(document).ready(function () {
        $('.battleCard').remove()
        document.querySelector('#deck1').innerHTML = `${ player1Deck.length}`
        document.querySelector('#deck2').innerHTML = `${ player2Deck.length}`
        if (player1Deck.length === 0 || player2Deck.length === 0) {
            document.querySelector('#winner').innerHTML = 'Game Over!'
        }
        compareCards()
    })
})


shuffle(deck)
dealCards()






