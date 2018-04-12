const DIRECTION = {
	"GAUCHE" : 1,
	"DROITE" : 2,
}

let useColors = ['#cc0000', '#66d9eb', '#32c06f']
let color = useColors[(Math.random()*3)]

function generateColors() {
  return color
}

const COLORS = [color]

export default { DIRECTION }
