var timer = 60;
var score = 0;
var hitnum = 0;
function incres() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function gethit() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitnum;
}
function makbubble() {
  var clutter = "";
  for (var i = 1; i <= 1680; i++) {
    var ran = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${ran}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeval").textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clicknum = Number(dets.target.textContent);
  if (clicknum == hitnum) {
    incres();
    makbubble();
    gethit();
  }
});

runtimer();
makbubble();
gethit();
