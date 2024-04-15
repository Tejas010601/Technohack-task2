let timer;
let totalSeconds = 60 * 5; // 5 minutes
let secondsRemaining = totalSeconds;
let isRunning = false;

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
document.getElementById('restartButton').addEventListener('click', restartTimer);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
    document.getElementById('resetButton').disabled = false;
    document.getElementById('restartButton').disabled = true;
  }
}

function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
    document.getElementById('restartButton').disabled = false;
  }
}

function resetTimer() {
  stopTimer();
  secondsRemaining = totalSeconds;
  updateTimerDisplay();
  document.getElementById('startButton').disabled = false;
  document.getElementById('resetButton').disabled = true;
  document.getElementById('restartButton').disabled = true;
}

function restartTimer() {
  resetTimer();
  startTimer();
}

function updateTimer() {
  if (secondsRemaining <= 0) {
    stopTimer();
    alert("Time's up!");
    return;
  }

  secondsRemaining--;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;
  document.getElementById('hours').innerText = padZero(hours);
  document.getElementById('minutes').innerText = padZero(minutes);
  document.getElementById('seconds').innerText = padZero(seconds);
}

function padZero(num) {
  return num < 10 ? '0' + num : num;
}
