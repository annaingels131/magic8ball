var imgChange = document.getElementById('btn');

var myQuestion = document.getElementById('question');

function eightBall() {
  var value = Math.ceil(Math.random() * 20);
  document.getElementById("magicImg").innerHTML = "<img src='img/magic8ball_" + value + ".png'>";
  myQuestion.value = ''
}
