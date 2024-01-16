const audioFiles = ['1.mp3', '2.mp3', '3.mp3', '4.mp3'];

let sequence = [];
let userSequence = [];
let level = 1;
let playing = false;

function playSound(sound) {
  const audio = new Audio(sound);
  audio.play();
}

function playSequence() {
  playing = true;
  let i = 0;
  const intervalId = setInterval(function () {
    playSound(audioFiles[sequence[i]]);
    i++;
    if (i >= sequence.length) {
      clearInterval(intervalId);
      playing = false;
    }
  }, 1000);
}

function addToSequence() {
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  sequence.push(randomIndex);
}

function startGame() {
  if (!playing) {
    sequence = [];
    userSequence = [];
    level = 1;
    addToSequence();
    playSequence();
  }
}

function userClick(index) {
  if (!playing) {
    playSound(audioFiles[index]);
    userSequence.push(index);

    if (userSequence.length === sequence.length) {
      if (userSequence.every((value, index) => value === sequence[index])) {
        level++;
        addToSequence();
        setTimeout(() => playSequence(), 1000);
      } else {
        alert(`Game Over! Your score: ${level - 1}`);
        startGame();
      }
      userSequence = [];
    }
  }
}