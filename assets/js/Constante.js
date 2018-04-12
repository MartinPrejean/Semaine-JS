const DIRECTION = {
	"GAUCHE" : 1,
	"DROITE" : 2,
}

const COLORS = ['#cc0000', '#66d9eb', '#32c06f']
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const POS_Y_SECOND = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100', '1200', '1300', '1400', '1500', '1600']
const POS_Y_FIRST = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', ]

const LEVEL_ONE_WORD =  ["Arbre", "Abricots", "Avoir", "Bavoir", "Babouin", "Boire","Chaud","Chat","Dauphin",
"Drame","Fourmi","Faim","Hibou","Haie","Inde","Jardin","Kadi","Lampe","Maison","Noir","Nager",
"Porte","Quatre","Roi","Samedi","Savon","Tatou","Usine","Vache","Vent","Wagon","Yaourt","Zebre"]

let word = LEVEL_ONE_WORD[Math.floor(Math.random() * LEVEL_ONE_WORD.length)].toUpperCase()

let LETTER_ONE = []

let vie = 5

export default { DIRECTION, COLORS, ALPHABET, POS_Y_FIRST, POS_Y_SECOND, LEVEL_ONE_WORD, LETTER_ONE, word, vie }
