import CONSTANT from './Constante.js'

class Letter {
    constructor(x, color, el, perso, word, letter, uniqueColor) {
        this.y = 0
        this.x = x
        this.width = 50
        this.height = 50
        this.color = color
        this.word = word
        this.perso = perso
        this.collision = true
        this.noRepeat = true
        this.letter = letter
        this.uniqueColor = uniqueColor
    }

    moveLetter(el, color, perso, uniqueColor) {
        setInterval(() => {
            this.y += 10
            el.style.top = `${this.y}px`
            if(this.collision) {
                if(!this.isCollide(el, perso)) {
                    const singleLetter = el.innerHTML
                    this.collision = false
                    el.style.opacity = "0"
                    for(let j = 0; j <= this.word.length; j++) {
                        if(singleLetter == this.word[j] && this.uniqueColor == this.color) {
                            CONSTANT.LETTER_ONE = [singleLetter, ...CONSTANT.LETTER_ONE]
                            for(let k = 0; k <= CONSTANT.LETTER_ONE.length; k++) {
                                if(singleLetter == CONSTANT.LETTER_ONE[k]) {
                                    const allDiv = document.querySelectorAll('.word-style')
                                    allDiv[j].style.color = this.uniqueColor
                                    allDiv[j].style.background = "#fff"
                                    CONSTANT.LETTER_ONE = CONSTANT.LETTER_ONE.filter((elem, index, self) => {
                                        return index === self.indexOf(elem);
                                    })
                                    console.log(CONSTANT.LETTER_ONE)
                                    const content = document.querySelector('.content')
                                    if(CONSTANT.LETTER_ONE.length == this.word.length) {
                                        for(let t = 0; t < CONSTANT.word.length; t++) {
                                            content.removeChild(allDiv[t])
                                        }
                                        CONSTANT.word = CONSTANT.LEVEL_ONE_WORD[Math.floor(Math.random() * CONSTANT.LEVEL_ONE_WORD.length)].toUpperCase()
                                        for(let i = 0; i < CONSTANT.word.length; i++) {
                                            console.log(i)
                                            console.log(CONSTANT.word)
                                            CONSTANT.LETTER_ONE = []
                                            const wordDiv = document.createElement("div")
                                            const wordText = document.createTextNode(CONSTANT.word[i])
                                            wordDiv.appendChild(wordText)
                                            wordDiv.style.background = uniqueColor
                                            wordDiv.classList.add('word-style')
                                            content.appendChild(wordDiv)
                                        }
                                    }
                                }
                            }
                        } else {
                            if(this.noRepeat) {
                                this.noRepeat = false
                                if(CONSTANT.vie == 0) {
                                    CONSTANT.vie = 0
                                    //this.getResult()
                                } else {
                                    CONSTANT.vie--
                                }
                                const vieDiv = document.querySelector(".vie-style")
                                vieDiv.innerHTML = CONSTANT.vie
                            } 
                            setTimeout(() => {
                                this.noRepeat = true;
                            }, 5000)
                        }
                    }
                    setTimeout(() => {
                        el.style.display = "none"
                        this.collision = true
                    }, 5000)
                } 
            }
        }, 100)
    }

    removeDuplicates(array){
        let seen = []
        for (let i = 0; i < array.length; i++) {
          if (seen.lastIndexOf(array[i])==-1) {
            seen.push(array[i])
          }
        }
        return seen
    }

    isCollide(a, b) {
        var aRect = a.getBoundingClientRect();
        var bRect = b.getBoundingClientRect();
    
        return (
            ((aRect.top + aRect.height) < (bRect.top)) ||
            (aRect.top > (bRect.top + bRect.height)) ||
            ((aRect.left + aRect.width) < bRect.left) ||
            (aRect.left > (bRect.left + bRect.width))
        )
    }
}

export default Letter