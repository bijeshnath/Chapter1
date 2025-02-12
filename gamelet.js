/* 

Gamelet: A starting point for writing games

*/

const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let xposition = 0;
let yposition = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    xposition = xposition - 10;
  }
  if (e.code === "ArrowRight") {
    xposition = xposition + 10;
  }
  if (e.code === "ArrowDown") {
    yposition = yposition + 10;
  }
  if (e.code === "ArrowUp") {
    yposition = yposition - 10;
  }
  if (xposition < 0) {
    xposition = 0;
  }

  refresh();
}
function refresh() {
  ball.style.left = xposition + "px";
  ball.style.top = yposition + "px";
}
