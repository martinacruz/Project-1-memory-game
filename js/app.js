console.log('Hell Week #1')

// //James Tip - Refrence Poke-a-Dot ALOT

// //function to-do list:
// //set random boxes ( 2 rows, 6 boxes each)
// //comparing clicked cards
// prevent clicked cards from being clicked again. const boolean?
// //increase level (add mistake, add row,)

// //click, rotate, show, set, click, rotate, show, set compare, reset position, (set if same), repeate until finished

// create an array to store all the card information. build a for loop that will go through these cards and set them on the board.
// Use cads.name to find matches in your if/else statement
// cards = [ 
//     {
//         name: 'Magic',
//         src: './images/magiccard.png'
//     },
//     {
//         name: 'Pokemon',
//         src: './images/pokemoncard.jpg'
//     },
//     {
//         name: 'Fate/Go',
//         src: './images/fategocard.png'
//     },
//     {
//         name: 'Among Us',
//         src: './images/redkindasus.jpg'
//     },
//     {
//         name: 'Yugioh',
//         src: './images/yugiohcard.jpg'
//     },
//     {
//         name: 'UNO',
//         src: './images/unocard.jpg'
//     }
// ]

//need variables?
let timer = 30;
let lvl = 1;
let mistakes = 0;
let wasFlipped = false
let firstFlipped = ''
let secondFlipped = ''

const cards = document.querySelectorAll('.cards');

for (let i=0; i<cards.length; i++) {
    cards[i].addEventListener('click', flipCard)
}

randomize()

//--------------- flipping function ------------

function flipCard() {
    //add class to clicked cards to style in css
    this.classList.add('flipped')
    //prevent card from being flipped after first click
    if (!wasFlipped){
        wasFlipped = true
        firstFlipped = this
        console.log(firstFlipped)
        let firstDiv = this.getElementByClass('cards flipped')
        console.log(firstDiv)
        //firstSrc = firstDiv.getElementByClass('frontFace').src
        //console.log(firstSrc)
    } else {
        wasFlipped = false
        secondFlipped = this
        console.log(firstFlipped, secondFlipped)
    }

    if (firstFlipped === secondFlipped ) {
        //keep flipped
        firstFlipped.removeEventListener('click', flipCard)
        secondFlipped.removeEventListener('click', flipCard)
        console.log('this is a match')
    } else {
        //flip back down

        //mistake counter goes up
        this.mistakes++
        document.querySelector('#mistakes').innerHTML = `Mistakes: ${this.mistakes}/3`
        
        // if (mistakes === 3) {
        //     alert('That`s 3 mistakes! GAME OVER!)
        // }
    }

}
//ISSUES:
//flipCard function keep showing true if using 'this.classList !== "cards flipped"'
//create two variables for first and second flipped?

//----------------- Randomize function ---------------

function randomize() {
    //select ONLY the hidden cards (.fontFace)
    let content = document.querySelectorAll('.frontFace')
    // ceate array to loop through ./images
    let src = ['./images/unocard.jpg', './images/yugiohcard.jpg', './images/redkindasus.jpg', './images/fategocard.png', './images/pokemoncard.jpg', './images/magiccard.png', './images/unocard.jpg', './images/yugiohcard.jpg', './images/redkindasus.jpg', './images/fategocard.png', './images/pokemoncard.jpg', './images/magiccard.png']
//I am getting undefined for some reason while for loop runs
//YOU HAVE TO DOUBLE THEM!!!

    //loop though src
    for(let i=src.length-1; i >= 0; i--){
        let j = Math.floor(Math.random() * i)
        let temp = src[i]
        src[i] = src[j]
        src[j] = temp
    }
    //loop through content(img's) and set their src randomly
    for (let i=0; i<content.length; i++) {
        content[i].src = src[i]
    }
}

//-------------- compare function ------------
function compare() {

}