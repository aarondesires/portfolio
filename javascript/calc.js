var clicked = false;
var canClick = true;
var display = '';
var memory = 0
var operation = "none"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// Add Click Event Listeners
  if (canClick) {
		addEventListener('mousedown', e => {
			clicked = true
			canClick = false
		})
	} else {
		addEventListener('mouseup', e => {
			clicked = false
			canClick = true
		})
	}

	// Draw out numbers of calculator
  var chars = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/']
  var counter = 0;  
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      rect(20 + (40 * j), 20 + (40 * i), 40, 40)
      textSize(30)
      text(chars[counter], 30 + (40 * j), 50 + (40 * i))
      counter++
    }
  }
  setButtonClicked()
  
  text(display, 200, 50, 10)
}

function setButtonClicked() {
  if (clicked) {
    if (mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60) {
      display += '1'
    }
    if (mouseX > 60 && mouseX < 100 && mouseY > 20 && mouseY < 60) {
      display += '2'
    }
    if (mouseX > 100 && mouseX < 140 && mouseY > 20 && mouseY < 60) {
      display += '3'
    }
    if (mouseX > 140 && mouseX < 180 && mouseY > 20 && mouseY < 60) {
      operation = '+'
      memory = parseInt(display)
      display = ''
      clear()
    }
    if (mouseX > 20 && mouseX < 60 && mouseY > 60 && mouseY < 100)
 {
      display += '4'
 }  
    if (mouseX > 60 && mouseX < 100 && mouseY > 60 && mouseY < 100) {
      display += '5'
    }
    if (mouseX > 100 && mouseX < 140 && mouseY > 60 && mouseY < 100) {
      display += '6'
    }
    if (mouseX > 140 && mouseX < 180 && mouseY > 60 && mouseY < 100) {
      operation = '-'
      memory = parseInt(display)
      display = ''
      clear()
    }
    if (mouseX > 20 && mouseX < 60 && mouseY > 100 && mouseY < 140) {
      display += '7'
    }
    if (mouseX > 60 && mouseX < 100 && mouseY > 100 && mouseY < 140) {
      display += '8'
    }
    if (mouseX > 100 && mouseX < 140 && mouseY > 100 && mouseY < 140) {
      display += '9'
    }
    if (mouseX > 140 && mouseX < 180 && mouseY > 100 && mouseY < 140) {
      operation = '*'
      memory = 0
      display = ''
      clear()
    }
    if (mouseX > 20 && mouseX < 60 && mouseY > 140 && mouseY < 180) {
      display = ''
      memory = 0
      operation = ''
      clear()
    }
    if (mouseX > 60 && mouseX < 100 && mouseY > 140 && mouseY < 180) {
      display += '0'
    }
    if (mouseX > 100 && mouseX < 140 && mouseY > 140 && mouseY < 180) {
      var temp
      clear()
      if (operation == '+') {
        temp = memory + parseInt(display)
      } else if (operation == '-') {
        temp = memory - parseInt(display)
      } else if (operation == '*') {
        temp = memory * parseInt(display)
      } else if (operation == '/') {
        temp = memory * parseInt(display)
      }
      display = temp.toString()
      memory = 0
      operation = ''
    }
    if (mouseX > 140 && mouseX < 180 && mouseY > 140 && mouseY < 180) {
      operation = '/'
      memory = parseInt(display)
      display = ''
      clear()
    }
    canClick = false
    clicked = false
  }
  
} 
