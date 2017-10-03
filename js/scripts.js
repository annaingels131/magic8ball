
var imgChange = document.getElementById("btn");
var value = Math.ceil(Math.random() * 20);

function eightBall() {
  document.getElementById("magicImg").innerHTML = "<img src='../img/magic8ball_" + value + ".png'>";
}

function rerun(){
  document.location.href = '';
}
