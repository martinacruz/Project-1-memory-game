console.log('Hell Week #1')

//James Tip - Refrence Poke-a-Dot ALOT

//function to-do list:
//set random boxes ( 2 rows, 6 boxes each)
//comparing clicked cards
// prevent clicked cards from being clicked again. const boolean?
//increase level (add mistake, add row,)

//click, rotate, show, set, click, rotate, show, set compare, reset position, (set if same), repeate until finished


//need variables?
let timer = 30;
let lvl = 1;
let mistakes = 0;
let wasFlipped = false //has card been flipped?
let selectedCards = []
let setDeck = []
let paired = []

const gameCards = [{
    card: 'among us',
    src: './images/redkindasus.jpg'
},
{
    card: 'fatego',
    src: './card/fategocard.pgn'
},
{
    card: 'magic',
    src: './images/magiccard.png'
},
{
    card: 'pokemon',
    src: './images/pokemoncard.jpg'
},
{
    card: 'uno',
    src: './images/unocard.jpg'
},
{
    card: 'yugioh',
    src: './images/yugiohcard.jpg'
}
]


//use new array to set the gamecards
//this should run once the page is open
//set attributes same as old version to not double work on the css

//--------------create game----------------

//access the 'game' div to append childs to
const gameLayout = document.querySelector('#game')

function setGame() {
    //set up the layed out cards w/ for loop like before 
    for (let i=0; i<gameCards.length; i++){ //double of gameCards array because sets of 2 for each object
    //create the tags
    const firstSet = document.createElement('img')
    firstSet.setAttribute('class', 'cards')
    //give it the 'cardBack' source
    firstSet.setAttribute('src', './images/cardBack.png')
    //set id# to comapre it later and not fall into same issue
    firstSet.setAttribute('id', i)
    gameLayout.appendChild(firstSet)
    setDeck.push(firstSet)
    }
    // if we want to comapre using 'id' we need to set it 2 different times or else #'s will go from 0 to 11 and w/ no set match.
    for (let i=0; i<gameCards.length; i++){
        const secondSet = document.createElement('img')
        secondSet.setAttribute('class', 'cards')
        secondSet.setAttribute('src', './images/cardBack.png')
        secondSet.setAttribute('id', i)
        gameLayout.appendChild(secondSet)
        setDeck.push(secondSet)
        }
    //console.log(setDeck)
    setClick()
    shuffle()
}

//set click event listeners to all .cards
function setClick () {
    const cards = document.querySelectorAll('.cards');
        for (let i=0; i<cards.length; i++) {
        cards[i].addEventListener('click', cardFlip)
}
}


//----------Shuffle Function----------

//Take setDeck and move id's around
function shuffle () {
    for(let i=setDeck.length-1; i >= 0; i--){
        let j = Math.floor(Math.random() * i)
        let temp = setDeck[i]
        setDeck[i] = setDeck[j]
        setDeck[j] = temp
    }
}


//----------Flipping the cards-----------

// all in card flip function
//  - get id #
//  - set a new src
//  - push to selected cards

function cardFlip () {
    //this.classList.add('flipped') //give class to keep CSS
    const cardId = this.getAttribute('Id') //get id # to set bottom card/match
    console.log(cardId)
    //need id of getId to find matching id from array (element position)
    this.setAttribute('src', `./images/card${cardId}.png`)
    selectedCards.push(this)
    if (selectedCards.length == 2) {
        setTimeout(checkMatch, 500) //fire checkMatch with short delay 
        }
        if (paired.length === 12) {
            alert('You won the game!')
        }
}

// ------------- Check Mach--------

//  - use card id #'s to match
//  - compare selected cards (fire after second selection)
//  - do things if == (set and leave up)
//  - do things if !==  (remove from selectedCards and flip back down)
function checkMatch () {
    if (selectedCards[0].getAttribute('id') == selectedCards[1].getAttribute('id')) {
        console.log('found a pair')
        paired.push(selectedCards[0]) //push into new array to use in win argument
        paired.push(selectedCards[1])
        selectedCards.shift(); //reset array
        selectedCards.shift();
        } else {
        console.log('this is not a match')
        selectedCards[0].setAttribute('src', './images/cardBack.png'); //set cards back down
        selectedCards[1].setAttribute('src', './images/cardBack.png');
        selectedCards.shift(); //remove from 'selectedCards' array
        selectedCards.shift();
        }
}

setGame()
