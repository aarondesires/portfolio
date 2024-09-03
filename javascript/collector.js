function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 50;
  score = 0;
  rx = 0;
  ry = 150;
  lives = 5;
}

function draw() {
  background("red");
  //player
  fill("purple");
  noStroke()
  var pl = circle(mouseX, mouseY, 75);
  //obstacle
  fill("cornflowerblue")
  rect(rx, ry, 150, 50);
  rx = rx + random(3, 5);
  if (rx > 400){
    rx = 0
    ry = random(0, 200)
  }
  //item
  fill("gold")
  square(x, y, 50);
  d = dist(mouseX, mouseY, x, y);
  e = dist(rx, ry, x, y)
  d2 = dist(mouseX, mouseY, rx, ry)
  if (d2 < 60){
    lives = lives - 1
    rx = random(0, 400)
    ry = random(0, 400)
  }
  if (lives < 1){
    background("orange");
    fill("red")
    textAlign(CENTER);
    textSize(40)
    text("Game Over!", 200, 200);
    noLoop();
  }
  // console.log(d)
  //collect
  if (d < 75){
    x = random(0, 400)
    y = random(0, 400)
    score = score + 1
  }
  if (e < 50){
    x = random(0, 400)
    y = random(0, 400)
  }
  if (score > 19){
    background("lightgreen");
    fill("cornflowerblue")
    textAlign(CENTER);
    textSize(40)
    text("You Won!", 200, 200);
    noLoop();
  }
  fill("white")
  textSize(50)
  text(score, 185, 75)
  fill("lightpink")
  text("Lives:", 10, 380)
  text(lives, 150, 380)
}
