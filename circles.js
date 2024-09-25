class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

function getRandomHex() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  var red = getRandomHex();
  var green = getRandomHex();
  var blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}

function createCircle() {
  let ctx = document.getElementById("myCanvas").getContext("2d");
  let radius = Math.floor(Math.random() * 80);
  let color = getRandomColor();
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let circle = new Circle(x, y, radius);

  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function createMultipleCircles() {
  for (let i = 0; i < 40; i++) {
    createCircle();
  }
}

createMultipleCircles();
