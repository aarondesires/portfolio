function setup() {
  createCanvas(windowWidth, windowHeight);
  drawBear()
  drawBear(1, 1, 0, 0)
}

function draw() {

}

function drawBear(width, height, xpos, ypos) {
  //body
  fill("brown")
  stroke("blue")
  ellipse(xpos + 250, ypos + 250, width * 100, height * 120)
  //ears
  fill("pink")
  ellipse(xpos + 210, ypos + 120, width * 35, height * 35)
  ellipse(xpos + 290, ypos + 120, width * 35, height * 35)
  //arms
  fill("brown")
  ellipse(xpos + 200, ypos + 250, width * 40, height * 40)
  ellipse(xpos + 300, ypos + 250, width * 40, height * 40)
  //feet
  ellipse(xpos + 200, ypos + 300, width * 50, height * 50)
  ellipse(xpos + 300, ypos + 300, width * 50, height * 50)
  //head
  ellipse(xpos + 250, ypos + 160, width * 100, height * 100)
  //eyes
  fill("black")
  ellipse(xpos + 230, ypos + 150, width * 10, height * 10)
  ellipse(xpos + 270, ypos + 150, width * 10, height * 10)
  fill("clear")
  //mouthandnose
  triangle(xpos + 250, ypos + 180, xpos + 240, ypos + 170, xpos + 260, ypos + 170)
  line(xpos + 250, ypos + 180, xpos + 260, ypos + 190)
  line(xpos + 250, ypos + 180, xpos + 240, ypos + 190)
}
