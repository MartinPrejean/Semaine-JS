import Constance from './Constante.js'

const wrapper = document.querySelector('.wrapper')
const distanceTouch = 100

class Character {

    constructor(direction = Constance.DIRECTION.DROITE) {
        this.x = 0
        this.y = 0
        this.velocity = 0
        this.direction = direction
        this.count = 0
        this.width = 90
    }

    move(direction, el) {
        let coord = {'x' : this.x, 'y' : this.y};
        switch(direction) {
            case Constance.DIRECTION.GAUCHE:
                this.count++
                el.classList.add('player-move')
                el.style.transform = "scaleX(1)"
                for(let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        if(coord.x >= distanceTouch / 5) {
                            coord.x -= distanceTouch / 5
                            el.style.left = `${coord.x}px`
                            this.x = coord.x
                            this.y = coord.y
                        }
                    }, 125)
                }
                this.correctMoveSpeed(el)
                break;
            case Constance.DIRECTION.DROITE: 
                this.count++
                console.log(coord.x)
                el.classList.add('player-move')
                el.style.transform = "scaleX(-1)"
                for(let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        if(coord.x <= document.body.clientWidth - distanceTouch / 5) {
                            coord.x += distanceTouch / 5
                            el.style.left = `${coord.x}px`
                            this.x = coord.x
                            this.y = coord.y
                        }
                    }, 125)
                }
                this.correctMoveSpeed(el)
                break;
            }
    }

    correctMoveSpeed(el) {
        if(this.count == 1) {
            setTimeout(() => {
                el.classList.remove('player-move')
                this.count = 0
            }, 625)
        } else if(this.count > 1) {
            this.count = 0
        }
    }

}

export default Character