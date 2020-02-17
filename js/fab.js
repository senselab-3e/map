let img;
let amsterdam = [];
let berlin = [];
let zurich = [];
let brazil = [];
let copenhagen = [];
let helsinki = [];
let oz = [];
let montreal = [];
let edinburgh = [];
let manchester = [];
let spaze = [];
let underspaze = [];
let array = [amsterdam, berlin, zurich, brazil, copenhagen, helsinki, oz, montreal, spaze, edinburgh, manchester, underspaze];

function setup(){
createCanvas(windowWidth, windowHeight, WEBGL)
img = loadImage(random(array));
}

function draw(){
if(!mouseIsPressed)
  background(0)
  orbitControl(5);
  noStroke()
  texture(img);
  rotateX(radians(-25))
  rotateY(radians(-frameCount*.5))
  sx = mouseX*2
  sy = mouseY*2
 plane(sx, sx* .5)
// sphere(sx, sx*.5);
}

function berli(){
  array= berl;
  setup();
}
