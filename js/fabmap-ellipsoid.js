//rockmodel
let train;
let running = true
//array of thignies
let pictures;
//obj: thingies
let thingies = [];
//canvas variable
let fabb;
// array: amst mimo
var mimoAmsterdam;
// obj: amst mimo
var amst, amst2, amst3, amstrand;
//camera Z index
// var cameraZ = -600;
//variables
var txtr;
var rand;
// for digestion
var tr;
var rocky;
var sliderX, sliderY, sliderZ;
var cameraX, cameraY, cameraZ;
var uval = 0.1;
var div;
var bound;
var mimo = ["Minor movements are not ours to make so much as ours to attune to", "A curatorial process for the activation of minor movements requires an attunement to the conditions that select for artfulness", "An attunement to artfulness opens the work to its more-than", "The more-than is what is curated", "An environment is activated, an enlivening of an ecology", "With the enlivening comes a felt experience of time bending", "Time bending moves experience to its emergent unfolding", "In this emergent unfolding we are not spectators", "Emergent unfoldings affect the environment they co-compose", "We are part of that co-composition", "To compose a minor movement is to be composed by it", "A curatorial process for the activation of minor movements requires an active shift in the presupposition that there is a field of art and a field of life", "The political runs through the differential that is composed when the binary between art and life is undone", "What mattters is not whether it is art, but how it shifts the conditions of experience", "When art becomes the way and not the endpoint minor movements become orientors for processes to come."];

var mimoText;
function preload() {
      mimoAmsterdam = ["mimoTraces/	003.jpg	", "mimoTraces/	004.jpg	", "mimoTraces/	005.jpg	", "mimoTraces/	025.png	", "mimoTraces/	026.png	", "mimoTraces/	027.png	", "mimoTraces/	028.png	", "mimoTraces/	029.png	", "mimoTraces/	030.png	", "mimoTraces/	031.png	", "mimoTraces/	032.png	", "mimoTraces/	033.png	", "mimoTraces/	034.png	", "mimoTraces/	035.png	", "mimoTraces/	036.png	", "mimoTraces/	037.png	", "mimoTraces/	038.png	", "mimoTraces/	102.jpg	", "mimoTraces/	103.jpg	", "mimoTraces/	104.jpg	", "mimoTraces/	105.jpg	", "mimoTraces/	106.jpg	", "mimoTraces/	107.jpg	", "mimoTraces/	108.jpg	", "mimoTraces/	109.jpg	", "mimoTraces/	110.jpg	", "mimoTraces/	121.jpg	", "mimoTraces/	122.jpg	", "mimoTraces/	123.jpg	", "mimoTraces/	124.jpg	", "mimoTraces/	125.jpg	", "mimoTraces/	126.jpg	", "mimoTraces/	127.jpg	", "mimoTraces/	128.jpg	", "mimoTraces/	212.jpg	", "mimoTraces/	213.jpg	", "mimoTraces/	214.jpg	", "mimoTraces/	215.jpg	", "mimoTraces/	230.jpg	", "mimoTraces/	231.jpg	", "mimoTraces/	232.jpg	", "mimoTraces/	233.jpg	", "mimoTraces/	235.jpg	", "mimoTraces/	236.jpg	", "mimoTraces/	325.jpg	"];
      pictures = ['thingies/beige.png', 'thingies/pinkpatch.png', 'thingies/plantplastic.png', 'thingies/polkaslink.png', 'thingies/posterpatch.png', 'thingies/posters.png', 'thingies/prepillowcreature.png'];
      // train = loadModel('models/agrisphere-stones-obj/agrisphere-stones.obj');
      rand = loadImage(random(pictures));
      amstrand = loadImage(random(mimoAmsterdam));
}

function setup() {
  fabb = createCanvas(windowWidth, windowHeight, WEBGL);
  fabb.parent('fabmap');
  // mimoText = createGraphics(2000, 500);
  // mimoText.text(mimo[0], mimo[0].length, mimo[0].length);

  // button = createButton('+');
  // button.position(19, 90);
  // button.mousePressed(zoomOut);
  //
  // button2 = createButton('-');
  // button2.position(19, 120);
  // button2.mousePressed(zoomIn);

  sliderX = createSlider(-1000, 1000, 0);
  sliderX.position(19, 20);
  sliderY = createSlider(-1000, 1000, -429);
  sliderY.position(19, 40);
  sliderZ = createSlider(-1000, 1000, 226);
  sliderZ.position(19, 60);

  thingies = new Bubble(pictures, 10, 10, 10);

  amst = new Bubble(mimoAmsterdam, 100, 100);
  amst2 = new Bubble(mimoAmsterdam, 100, 100);
  amst3 = new Bubble(mimoAmsterdam, 100, 100);

div();
}

function draw() {
   if (!running) return
  cameraX = sliderX.value()
  cameraY = sliderY.value()
  cameraZ = sliderZ.value()
  camera(cameraX, cameraY, cameraZ, 0, 0, 0, 0, 1, 0);
  background(0, 0, 0, 0.2);
  noStroke();


  push();
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  push();
    for (let j = 0; j < 5; j++) {
     push();
     for (let i = 0; i < 2; i++) {
       translate(
         sin(frameCount * 0.02 + j) * 100,
         -cos(frameCount * 0.001 + j) * 100,
         sin(frameCount * 0.001 + j) * 100,
       );
       i * 0.1;
       rotateZ(frameCount * 0.002);
    push();
    noStroke();
    scale(100);
    txtr = texture(rand);
    ellipsoid(30, 40, 40, 12,6);
    pop();
    }
    pop();
  }
  pop();
  pop();

  push();

  if (cameraZ===11400){
    div.style('display', 'block');
  }
}

function div(){
div = createDiv(mimo);
div.style('display', 'none');
div.position(100,100);

}

function zoomOut() {
  cameraZ = cameraZ+1000;
  console.log(cameraZ);

}
function zoomIn() {
  cameraZ = cameraZ-1000;
  console.log(cameraZ);
}

function mousePressed() {
  running = !running // flip the boolean
}
function svvi(x){
  var y = sin(x/(sin(x/30)*10+290))*500;
    // console.log(y);
  return y;
  // console.log(y);
}

function keyPressed() {
    if (key === 's') {
      let stickerdia=200;
      // circli.position(mouseX, mouseY);
      let img = createImage(stickerdia, stickerdia); // same as new p5.Image(100, 100);
      img.copy(fabb, mouseX, mouseY, stickerdia, stickerdia, 0, 0, stickerdia, stickerdia);
      maskImage = createGraphics(stickerdia*2, stickerdia*2);
      maskImage.ellipse(stickerdia, stickerdia, stickerdia*2, stickerdia*2);
      img.mask(maskImage);
      var cri = image(img, (-width)/2, (-height)/2);
      save(img, 'huh.png');
    }
  }
