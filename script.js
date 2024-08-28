var i = 0;
var txt = `Interested Area:`;
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("interest1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}