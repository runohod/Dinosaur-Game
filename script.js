const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event) {
    jump();
})

function jump () {
    if (dino.classList) {
        dino.classList.add('jump')
    }

    setTimeouut (function(){
        dino.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval (function() {
    let dinoTop = perseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cacrusLeft = perseInt(window.getComputedStyle(cacttus).getPropertyValue('left'));

    if (cactuLeft , 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('GAME OVER')
    }
}, 10)