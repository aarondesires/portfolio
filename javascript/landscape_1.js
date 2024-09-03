function setup() {
  createCanvas(600, 600);
}

function draw() {
  //sky
  background("lightblue");
  noStroke();
  
  //ground
  fill("green");
  rect(0,400,600,200);
  
  //mounts
  fill("#795548");
  triangle(300,400,450,50,600,400);
  
  //sun
  stroke("orange")
  strokeWeight(10)
  fill("gold")
  circle(80, 80, 100)
  
  //house
  noStroke()
  fill("beige")
  
  square(50, 300, 100)
  fill("red")
  triangle(50, 300, 100, 250, 150, 300)
  //door
  rect(100, 350, 30, 50)
  //window
  fill("cornflowerblue")
  square(65, 315, 30)
}
