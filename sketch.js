function setup() {
    createCanvas(500, 500);
    background('yellow');
  }
  
  function draw() {
    
    stroke('orange');
    fill('purple');
    
    // console.log (mouseIsPressed);
    
    if (mouseIsPressed) {
    rect(mouseX,mouseY,15,15);
    }
  }