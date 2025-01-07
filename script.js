'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent ='correct answer';

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10; f

// document.querySelector('.guess').textContent=21;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;


let Score = 20;
let Highscore=0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⌫ No number!!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🏆 Correct answer you won';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if(Score>Highscore){
            Highscore=Score;
            document.querySelector('.highscore').textContent=Highscore;
        }
    } else if (guess > secretNumber) {
        if (Score > 1) {
            document.querySelector('.message').textContent = '📈 Too high';
            Score -= 1;
            document.querySelector('.score').textContent = Score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (Score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low';
            Score -= 1;
            document.querySelector('.score').textContent = Score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1; // Update the global variable
    Score = 20; // Reset the score
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = Score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
});