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

//sorting fruit excercise
let fruit = ['🍎', '🍊', '🍎', '🍎', '🍊']
let appleShelf = document.getElementById('apple-shelf')
let orangeShelf = document.getElementById('orange-shelf')

//use loop, conditional statement,nand textContent put fruit on their respective shelf

function sortFruit() {
    for (let i = 0; i< fruit.length; i++){
        if (fruit[i] === '🍎') {
            appleShelf.textContent += '🍎'

        } else if (fruit[i] ==='🍊') {
            orangeShelf.textContent += '🍊'
        }
    }
}

sortFruit()

