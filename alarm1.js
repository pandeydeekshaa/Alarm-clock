let alarmTimeout;

function setAlarm() {
  const alarmTime = document.getElementById('alarmTime').value;

  if (alarmTime === '') {
    alert('Please set a valid alarm time');
    return;
  }

  const now = new Date();
  const alarm = new Date(now.toDateString() + ' ' + alarmTime);

  if (alarm <= now) {
    alert('Please set a future alarm time');
    return;
  }

  const timeDifference = alarm - now;

  alarmTimeout = setTimeout(() => {
    alert('Alarm! Wake up!');
    document.getElementById('alarmStatus').textContent = 'Alarm is ringing!';
    playAlarmSound();
  }, timeDifference);

  document.getElementById('alarmStatus').textContent = 'Alarm set for ' + alarmTime;
}

function clearAlarm() {
  clearTimeout(alarmTimeout);
  document.getElementById('alarmStatus').textContent = 'Alarm cleared';
  stopAlarmSound();
}

function playAlarmSound() {
  const alarmSound = document.getElementById('alarmSound');
  alarmSound.loop = true;
  alarmSound.play();
}

function stopAlarmSound() {
  const alarmSound = document.getElementById('alarmSound');
  alarmSound.pause();
  alarmSound.currentTime = 0;
}






