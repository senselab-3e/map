//rockmodel
let train;
//aray of thignies
let pictures;

//choose random from array
var rand;
let rnd;

let picturesbrazil=[];
//canvas
let fabb;
//textre
var txtr;
// array
var mimoAmsterdam;
var amst;
var amsty;
var cameraZ = 100;
function preload() {
      mimoAmsterdam = ["mimoTraces/	003.jpg	", "mimoTraces/	004.jpg	", "mimoTraces/	005.jpg	", "mimoTraces/	025.png	", "mimoTraces/	026.png	", "mimoTraces/	027.png	", "mimoTraces/	028.png	", "mimoTraces/	029.png	", "mimoTraces/	030.png	", "mimoTraces/	031.png	", "mimoTraces/	032.png	", "mimoTraces/	033.png	", "mimoTraces/	034.png	", "mimoTraces/	035.png	", "mimoTraces/	036.png	", "mimoTraces/	037.png	", "mimoTraces/	038.png	", "mimoTraces/	102.jpg	", "mimoTraces/	103.jpg	", "mimoTraces/	104.jpg	", "mimoTraces/	105.jpg	", "mimoTraces/	106.jpg	", "mimoTraces/	107.jpg	", "mimoTraces/	108.jpg	", "mimoTraces/	109.jpg	", "mimoTraces/	110.jpg	", "mimoTraces/	121.jpg	", "mimoTraces/	122.jpg	", "mimoTraces/	123.jpg	", "mimoTraces/	124.jpg	", "mimoTraces/	125.jpg	", "mimoTraces/	126.jpg	", "mimoTraces/	127.jpg	", "mimoTraces/	128.jpg	", "mimoTraces/	212.jpg	", "mimoTraces/	213.jpg	", "mimoTraces/	214.jpg	", "mimoTraces/	215.jpg	", "mimoTraces/	230.jpg	", "mimoTraces/	231.jpg	", "mimoTraces/	232.jpg	", "mimoTraces/	233.jpg	", "mimoTraces/	235.jpg	", "mimoTraces/	236.jpg	", "mimoTraces/	325.jpg	"];
      pictures = ['thingies/beige.png', 'thingies/pinkpatch.png', 'thingies/plantplastic.png', 'thingies/polkaslink.png', 'thingies/posterpatch.png', 'thingies/posters.png', 'thingies/prepillowcreature.png'];

      // rand = loadImage(random(pictures));
      // amst = loadImage(random(mimoAmsterdam));

      train = loadModel('models/agrisphere-stones-obj/agrisphere-stones.obj');

}

function setup() {
  fabb = createCanvas(windowWidth, windowHeight, WEBGL);
  fabb.parent('fabmap');



  button = createButton('+');
  button.position(19, 19);
  button.mousePressed(zoomOut);

  button2 = createButton('-');
  button2.position(19, 40);
  button2.mousePressed(zoomIn);
  camera(0, 0, cameraZ, 0, 0, 0, 0, 1, 0);
  rnd = new Bubble(pictures);
  amst = new Bubble(mimoAmsterdam);

}

function draw() {
  camera(0, 0, cameraZ, 0, 0, 0, 0, 1, 0);
  background(0, 0, 0, 0.2);
  noStroke();

  translate(0, 200, -400);
  // push();
  // txtr = texture(rand);
  // // box(50);
  // pop();
  //
  push();
  rnd.plan();
  pop();


  translate(0, 0, -400);
  push();
  // amsty = texture(amst);
  // plane(50);
  amst.plan();
  pop();
}

function texturefromArray(array, variab){
  let x = loadImage(random(array));
  variab = texture(x);
}

function mousePressed(){
  rnd.newTex();
  amst.newTex();
}

function zoomOut() {
  cameraZ = cameraZ+100;
  console.log(cameraZ);
}
function zoomIn() {
  cameraZ = cameraZ-100;
  console.log(cameraZ);
}
