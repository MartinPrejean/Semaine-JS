let ALL_WORLD = localStorage.getItem('ALL_WORLD')
let myTab = ALL_WORLD.split(',')
ALL_WORLD = myTab


function afficheMot(array){
  let bulle = document.querySelector('.bulle-leonardo')
  bulle.innerHTML = `Oh bravo! Tu as trouvé ${array.length-1} mots! <br> Voyons ce qu'ils signifient!`
  for (let i = 0; i < array.length; i++) {
    let element = document.getElementById(array[i])
    element.style.display = 'block'
  }
  return none
}

afficheMot(ALL_WORLD)
