let fighters = ['🐉', '🍩', '🐊', '🍤', '🐢', '🐰', '🐥', '🐸', '🐘', '🐻', '🐝', '🐙', '🦁', '🐴', '🐹']

let stageEl = document.getElementById('stage')
let fightButton = document.getElementById('fightButton')

fightButton.addEventListener('click', function (){

//pick random emojis
let randomIndexOne = Math.floor(Math.random () * fighters.length)
let randomIndexTwo = Math.floor(Math.random () * fighters.length)
// console.log(fighters[randomIndexOne] + 'vs' + fighters[randomIndexTwo])
stageEl.textContent = fighters[randomIndexOne] + ' vs ' + fighters[randomIndexTwo]

})
//console.log();