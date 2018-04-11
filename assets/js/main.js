import Character from './Character.js'
import Constance from './Constante.js'

const player = new Character(Constance.DIRECTION.DROITE);

const divPlayer = document.querySelector('.player')

window.addEventListener('keydown', (e) => {
    let key = e.keyCode
    switch(key) {
        case 37:
            player.move(Constance.DIRECTION.GAUCHE, divPlayer);
            break;
        case 39: 
            player.move(Constance.DIRECTION.DROITE, divPlayer);
            break;
        default: 
            return true;
    }
})