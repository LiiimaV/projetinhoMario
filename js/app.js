const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
   mario.classList.add('jump');

   setTimeout(() => {
      mario.classList.remove('jump');
   }, 500)
}

const loop = setInterval(() => {

   const pipePosition = pipe.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
   const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '')
   
   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105) {

      pipe.style.animation = 'none'
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'none'
      mario.style.bottom  = `${marioPosition}px`;
      mario.src = './img/game-over.png'
      mario.style.width = '80px'
      mario.style.marginLeft = '40px'

      clouds.style.animation = 'none'
      clouds.style.right = `${cloudsPosition}px`;

      src = './img/gameOver.png'/

      clearInterval(loop);

   }

}, 10)

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);