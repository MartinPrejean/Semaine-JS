wrapper = document.getElementsByClassName('wrapper')

// On veut faire défiler des lettres en majuscules de haut en bas pour que le joueur les attrape
	// On lui indique le mot
	// Dès qu'il a attrapé toute les lettres d'un mot qui existe dans la liste, on valide le mot
// On génère une couleur au départ
	// Le joueur ne peut attraper que les lettres qui corespondent à sa couleur
// La partie se termine lorsque le timer est à 0
	// On regarde le score du joueur ( 10pts par mots)

//Pour la validation des mots
	// quand le joueur attrape une lettre
		// on vérifie si elle fait partie d'un mot
			// si oui on enregistre l'action
			// si non on ignore
		// si le joueur attrape toute les lettres d'un mot
			// on valide le mot
			// on augmente le score


//On crée une class pour la lettre
class Letter {
	constructor(x, color) {
		this.x = x
		this.y = 0
		this.color = color
	}
}

// On va stocker l'alphabet dans un tableau
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// On va stocker les couleurs utilisées
useColors = ['#cc0000', '#66d9eb', '#32c06f']

// On va stocker les mots 
levelOneWords = ["araignee", "abeille","abricots","autorisation", "banane", "baleine", "boire", "batir", "cochon","cactus","caillou",
"dauphin","dormir","drame","elephant","elegant","elaborer","fourmi","faim","fouiller","hibou","habitation","haie","icone","identique",
"immortel","jardin","jaguar","koala","kakis","lampe","lama","maison","maman","noir","nager","opéra","object","porte",
"pantalon","quarante","roi",]
levelTwoWords = ["acrimonie","anacoluthe","aplacophore","barbon","bamboche","debagouler","deletere","dacitique", "emmouscailler",
"egrotant","fatrasie","frontispice","forclore","galejade","grandelet","garrocher","hegemonie","huis","hypotypose","frappante",
"ijolite","inanite","irrefragable","jactance","jobastre","kraken","kenophobie","kakawis","lutrin","labile","linge","lerche",
"mandala","maganer","mas","miston","nervi","notule","nubile","obvie","opprobre","pasquin","parangon","patouillard",
"peronnelle","qatariote","rabrouer", "sphinge","tautologie","tuple","ubuesque", "valetudinaire","wagon","whisky","xylophone",
"yuzu","zouk",]

// On génère une lettre random
alphabet = function randomLetter() {
	let string = ''

	for (i = 0; i < alphabet.length; i++) {
		string = string + alphabet[Math.floor(Math.random() * alphabet.length)]
	}

	return string

	setTimeout(string, 100)
}

// On génère le mot random du début (level1)
levelOneWords = function randomWord() {
	let string = ''

	for (i = 0; i < levelOneWords.length; i++) {
		string = string + levelOneWords[Math.floor(Math.random() * levelOneWords.length)]
	}

	return string

	setTimeout(string, 100)
}

// On génère la couleur random attribuée

// On check la validité d'une lettre (level1)
	// array.prototype.find() ?
function levelOneTrue () {
	for (i = 0; i < levelOneWords.length; i++) {
		for (i = 0; i < alphabet.length; i++) {
			if ()
		}
	}
}