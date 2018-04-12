import Character from './Character.js'
import CONSTANT from './Constante.js'
import Letter from './Letter.js'

const player = new Character(CONSTANT.DIRECTION.DROITE);
const divPlayer = document.querySelector('.player')
const uniqueColor = CONSTANT.COLORS[Math.floor(Math.random() * CONSTANT.COLORS.length)]


let allLetters = []

/* Gestion des déplacements de la flèche gauche et droite*/
window.addEventListener('keydown', (e) => {
    let key = e.keyCode
    switch(key) {
        case 37:
            player.move(CONSTANT.DIRECTION.GAUCHE, divPlayer);
            break;
        case 39: 
            player.move(CONSTANT.DIRECTION.DROITE, divPlayer);
            break;
        default: 
            return true;
    }
})


/* Généré le premier */
function getWord() {
    for(let i = 0; i < CONSTANT.word.length; i++) {
        const wordDiv = document.createElement("div")
        const wordText = document.createTextNode(CONSTANT.word[i])
        const content = document.querySelector('.content')
        wordDiv.appendChild(wordText)
        wordDiv.style.background = uniqueColor
        wordDiv.classList.add('word-style')
        content.appendChild(wordDiv)
    }
}
getWord()

/* Ajouter des lettres aléatoire */
function addElement () { 
    const selectColor = CONSTANT.COLORS[Math.floor(Math.random() * CONSTANT.COLORS.length)]
    const posXRandom = `${CONSTANT.POS_Y_SECOND[Math.floor(Math.random()* CONSTANT.POS_Y_SECOND.length)] - 50}px`
    
    const letter = document.createElement("div")

    let letterABC = document.createTextNode(CONSTANT.ALPHABET[Math.floor(Math.random() * CONSTANT.ALPHABET.length)])
    letter.style.background = selectColor
    letter.classList.add('letter-style')
    letter.appendChild(letterABC)
    
    const currentDiv = document.querySelector(".letters"); 
    document.body.insertBefore(letter, currentDiv);
    const letterPosition = new Letter(posXRandom, selectColor, letter, divPlayer, CONSTANT.word, letter, uniqueColor)
    letterPosition.moveLetter(letter, selectColor, divPlayer, uniqueColor)
    allLetters = [letter, ...allLetters]
    for(let i = 0; i < allLetters.length; i++) {
        letter.style.top = '0px'
        letter.style.left = posXRandom
    }
}

/* Ajouter des lettres du mot */
function addLetterOfWord() { 
    const posXRandom = `${CONSTANT.POS_Y_FIRST[Math.floor(Math.random()* CONSTANT.POS_Y_FIRST.length)] - 50}px`    
    const letter = document.createElement("div")
    let letterABC = document.createTextNode(CONSTANT.word[Math.floor(Math.random() * CONSTANT.word.length)])
    letter.style.background = uniqueColor
    letter.classList.add('letter-style')
    letter.appendChild(letterABC)
    
    const currentDiv = document.querySelector(".letters"); 
    document.body.insertBefore(letter, currentDiv);
    const letterPosition = new Letter(posXRandom, uniqueColor, letter, divPlayer, CONSTANT.word, letter, uniqueColor)
    letterPosition.moveLetter(letter, uniqueColor, divPlayer, uniqueColor)
    allLetters = [letter, ...allLetters]
    for(let i = 0; i < allLetters.length; i++) {
        letter.style.top = '0px'
        letter.style.left = posXRandom
    }
}

/* Création de la div pour la vie */
function creationVie() {
    const score = document.querySelector('.score')
    const vieDiv = document.createElement("div")
    const vieText = document.createTextNode(CONSTANT.vie)
    vieDiv.appendChild(vieText)
    vieDiv.classList.add('vie-style')
    score.appendChild(vieDiv)
}

creationVie()

const restart = document.querySelector('#restart')
restart.addEventListener('click', () => {
    CONSTANT.play = 0
    const allDiv = document.querySelectorAll('.word-style')
    const content = document.querySelector('.content')
    for(let t = 0; t < CONSTANT.word.length; t++) {
        content.removeChild(allDiv[t])
    }
    CONSTANT.word = CONSTANT.LEVEL_ONE_WORD[Math.floor(Math.random() * CONSTANT.LEVEL_ONE_WORD.length)].toUpperCase()
    CONSTANT.ALL_WORLD += CONSTANT.word + ','
    console.log(CONSTANT.ALL_WORLD)
    for(let i = 0; i < CONSTANT.word.length; i++) {
        CONSTANT.LETTER_ONE = []
        const wordDiv = document.createElement("div")
        const wordText = document.createTextNode(CONSTANT.word[i])
        wordDiv.appendChild(wordText)
        wordDiv.style.background = uniqueColor
        wordDiv.classList.add('word-style')
        content.appendChild(wordDiv)
        const gameOver = document.querySelector('.game-over-container')
        gameOver.style.display = "none"
        CONSTANT.vie = 5
    }
})

/* Création à intervalle régulier des lettres aléatoire */
setInterval(() => {
    if(CONSTANT.play == 0) {
        addElement()
    }
}, 1000)

/* Création à intervalle régulier des lettres du mots */
setInterval(() => {
    if(CONSTANT.play == 0) {
        addLetterOfWord()
    }
}, 5000)
CONSTANT.ALL_WORLD += CONSTANT.word + ','