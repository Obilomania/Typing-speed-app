var time = 0;
var running = 0;
var startBtn = document.querySelector(".start");
var timeCount = document.querySelector(".time");
var remark = document.getElementById("remark");
var message = document.getElementById("textarea");
message.value = "";

/* ------------------TIMER--------------------------------- */
function start() {
  if (running == 0) {
    running = 1;
    increment();
  }
  message.value = "";
  timeCount.innerHTML = "00:00";
}

/* -------------------STOP---------------------------------------- */
function stopit() {
  if (message.value === "") {
    alert("Click Start and Write Some Text");
  }
  running = 0;
}

function reset() {
  running = 0;
  time = 0;
  message.value = "";
  timeCount.innerHTML = "00:00";
}

/* ----------------TIME INCREMENT---------------------------------- */

function increment() {
  if (running == 1) {
    setTimeout(function () {
      time++;
      var mins = Math.floor(time / 10 / 60);
      var secs = Math.floor((time / 10) % 60);
      var tenths = time % 10;
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      timeCount.innerHTML = secs + ":" + "0" + tenths;
      increment();
    }, 100);
  }
}

/* ----------------COUNT WORDS----------------------------- */
function countWord() {
  words = message.value;

  var count = 0;

  var split = words.split(" ");

  for (var i = 0; i < split.length; i++) {
    if (split[i] != "") {
      count += 1;
    }
  }

  document.getElementById("show").innerHTML = count;
}
