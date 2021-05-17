'use strict';
/*
// console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🏆 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumbr = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😭 Put your number!';

    // when player wins
  } else if (guess === secretNumbr) {
    document.querySelector('.message').textContent = '💡 Yes, Currect!!';
    document.querySelector('.number').textContent = secretNumbr;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').style.fontSize = '10rem';
    document.querySelector('.number').style.color = '#60b347';

    // highscore login operation
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secretNumbr) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '!!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumbr) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Start your game again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumbr = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start now...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '0';

  // Restore BG, FZ, CL,FC agin
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').style.color = '#222';
});
