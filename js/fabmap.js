//rockmodel
let train;
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
var cameraZ = -600;
//variables
var txtr;
var rand;
// for digestion
var tr;
var rocky;
var sliderX, sliderY, sliderZ;
var uval = 0.1;
var c = [{x:0, y:0, z:0}, {x:0, y:20, z:0}, {x:20, y:0, z:0}, {x:20, y:20, z:0}, {x:40, y:0, z:0}, {x:40, y:20, z:0}, {x:60, y:0, z:0}, {x:60, y:20, z:0}, {x:80, y:0, z:0}, {x:80, y:20, z:0}, {x:100, y:0, z:0}, {x:100, y:20, z:0}, {x:120, y:0, z:0}, {x:120, y:20, z:0}, {x:140, y:0, z:0}, {x:140, y:20, z:0}, {x:160, y:0, z:0}, {x:160, y:20, z:0}, {x:180, y:0, z:0}, {x:180, y:20, z:0}, {x:200, y:0, z:0}, {x:200, y:20, z:0}, {x:220, y:0, z:0}, {x:220, y:20, z:0}, {x:240, y:0, z:0}, {x:240, y:20, z:0}, {x:0, y:20, z:0}, {x:0, y:40, z:0}, {x:20, y:20, z:0}, {x:20, y:40, z:0}, {x:40, y:20, z:0}, {x:40, y:40, z:0}, {x:60, y:20, z:0}, {x:60, y:40, z:0}, {x:80, y:20, z:0}, {x:80, y:40, z:0}, {x:100, y:20, z:0}, {x:100, y:40, z:0}, {x:120, y:20, z:0}, {x:120, y:40, z:0}, {x:140, y:20, z:0}, {x:140, y:40, z:0}, {x:160, y:20, z:0}, {x:160, y:40, z:0}, {x:180, y:20, z:0}, {x:180, y:40, z:0}, {x:200, y:20, z:0}, {x:200, y:40, z:0}, {x:220, y:20, z:0}, {x:220, y:40, z:0}, {x:240, y:20, z:0}, {x:240, y:40, z:0}, {x:0, y:40, z:0}, {x:0, y:60, z:0}, {x:20, y:40, z:0}, {x:20, y:60, z:0}, {x:40, y:40, z:0}, {x:40, y:60, z:0}, {x:60, y:40, z:0}, {x:60, y:60, z:0}, {x:80, y:40, z:0}, {x:80, y:60, z:0}, {x:100, y:40, z:0}, {x:100, y:60, z:0}, {x:120, y:40, z:0}, {x:120, y:60, z:0}, {x:140, y:40, z:0}, {x:140, y:60, z:0}, {x:160, y:40, z:0}, {x:160, y:60, z:0}, {x:180, y:40, z:0}, {x:180, y:60, z:0}, {x:200, y:40, z:0}, {x:200, y:60, z:0}, {x:220, y:40, z:0}, {x:220, y:60, z:0}, {x:240, y:40, z:0}, {x:240, y:60, z:0}, {x:0, y:60, z:0}, {x:0, y:80, z:0}, {x:20, y:60, z:0}, {x:20, y:80, z:0}, {x:40, y:60, z:0}, {x:40, y:80, z:0}, {x:60, y:60, z:0}, {x:60, y:80, z:0}, {x:80, y:60, z:0}, {x:80, y:80, z:0}, {x:100, y:60, z:0}, {x:100, y:80, z:0}, {x:120, y:60, z:0}, {x:120, y:80, z:0}, {x:140, y:60, z:0}, {x:140, y:80, z:0}, {x:160, y:60, z:0}, {x:160, y:80, z:0}, {x:180, y:60, z:0}, {x:180, y:80, z:0}, {x:200, y:60, z:0}, {x:200, y:80, z:0}, {x:220, y:60, z:0}, {x:220, y:80, z:0}, {x:240, y:60, z:0}, {x:240, y:80, z:0}, {x:0, y:80, z:0}, {x:0, y:100, z:0}, {x:20, y:80, z:0}, {x:20, y:100, z:0}, {x:40, y:80, z:0}, {x:40, y:100, z:0}, {x:60, y:80, z:0}, {x:60, y:100, z:0}, {x:80, y:80, z:0}, {x:80, y:100, z:0}, {x:100, y:80, z:0}, {x:100, y:100, z:0}, {x:120, y:80, z:0}, {x:120, y:100, z:0}, {x:140, y:80, z:0}, {x:140, y:100, z:0}, {x:160, y:80, z:0}, {x:160, y:100, z:0}, {x:180, y:80, z:0}, {x:180, y:100, z:0}, {x:200, y:80, z:0}, {x:200, y:100, z:0}, {x:220, y:80, z:0}, {x:220, y:100, z:0}, {x:240, y:80, z:0}, {x:240, y:100, z:0}, {x:0, y:100, z:0}, {x:0, y:120, z:0}, {x:20, y:100, z:0}, {x:20, y:120, z:0}, {x:40, y:100, z:0}, {x:40, y:120, z:0}, {x:60, y:100, z:0}, {x:60, y:120, z:0}, {x:80, y:100, z:0}, {x:80, y:120, z:0}, {x:100, y:100, z:0}, {x:100, y:120, z:0}, {x:120, y:100, z:0}, {x:120, y:120, z:0}, {x:140, y:100, z:0}, {x:140, y:120, z:0}, {x:160, y:100, z:0}, {x:160, y:120, z:0}, {x:180, y:100, z:0}, {x:180, y:120, z:0}, {x:200, y:100, z:0}, {x:200, y:120, z:0}, {x:220, y:100, z:0}, {x:220, y:120, z:0}, {x:240, y:100, z:0}, {x:240, y:120, z:0}, {x:0, y:120, z:0}, {x:0, y:140, z:0}, {x:20, y:120, z:0}, {x:20, y:140, z:0}, {x:40, y:120, z:0}, {x:40, y:140, z:0}, {x:60, y:120, z:0}, {x:60, y:140, z:0}, {x:80, y:120, z:0}, {x:80, y:140, z:0}, {x:100, y:120, z:0}, {x:100, y:140, z:0}, {x:120, y:120, z:0}, {x:120, y:140, z:0}, {x:140, y:120, z:0}, {x:140, y:140, z:0}, {x:160, y:120, z:0}, {x:160, y:140, z:0}, {x:180, y:120, z:0}, {x:180, y:140, z:0}, {x:200, y:120, z:0}, {x:200, y:140, z:0}, {x:220, y:120, z:0}, {x:220, y:140, z:0}, {x:240, y:120, z:0}, {x:240, y:140, z:0}, {x:0, y:140, z:0}, {x:0, y:160, z:0}, {x:20, y:140, z:0}, {x:20, y:160, z:0}, {x:40, y:140, z:0}, {x:40, y:160, z:0}, {x:60, y:140, z:0}, {x:60, y:160, z:0}, {x:80, y:140, z:0}, {x:80, y:160, z:0}, {x:100, y:140, z:0}, {x:100, y:160, z:0}, {x:120, y:140, z:0}, {x:120, y:160, z:0}, {x:140, y:140, z:0}, {x:140, y:160, z:0}, {x:160, y:140, z:0}, {x:160, y:160, z:0}, {x:180, y:140, z:0}, {x:180, y:160, z:0}, {x:200, y:140, z:0}, {x:200, y:160, z:0}, {x:220, y:140, z:0},{x:220, y:160, z:0},{x:240, y:140, z:0}, {x:240, y:160, z:0}, {x:0, y:160, z:0}, {x:0, y:180, z:0}, {x:20, y:160, z:0},{x:20, y:180, z:0},{x:40, y:160, z:0},{x:40, y:180, z:0},{x:60, y:160, z:0},{x:60, y:180, z:0},{x:80, y:160, z:0},{x:80, y:180, z:0},{x:100, y:160, z:0},{x:100, y:180, z:0},{x:120, y:160, z:0},{x:120, y:180, z:0},{x:140, y:160, z:0},{x:140, y:180, z:0},{x:160, y:160, z:0},{x:160, y:180, z:0},{x:180, y:160, z:0},{x:180, y:180, z:0},{x:200, y:160, z:0},{x:200, y:180, z:0},{x:220, y:160, z:0},{x:220, y:180, z:0},{x:240, y:160, z:0},{x:240, y:180, z:0},{x:0, y:180, z:0},{x:0, y:200, z:0},{x:20, y:180, z:0},{x:20, y:200, z:0},{x:40, y:180, z:0},{x:40, y:200, z:0},{x:60, y:180, z:0},{x:60, y:200, z:0},{x:80, y:180, z:0},{x:80, y:200, z:0},{x:100, y:180, z:0},{x:100, y:200, z:0},{x:120, y:180, z:0},{x:120, y:200, z:0},{x:140, y:180, z:0},{x:140, y:200, z:0},{x:160, y:180, z:0},{x:160, y:200, z:0},{x:180, y:180, z:0},{x:180, y:200, z:0},{x:200, y:180, z:0}, {x:200, y:200, z:0},{x:220, y:180, z:0},{x:220, y:200, z:0}, {x:240, y:180, z:0},{x:240, y:200, z:0},{x:0, y:200, z:0},{x:0, y:220, z:0},{x:20, y:200, z:0},{x:20, y:220, z:0},{x:40, y:200, z:0},{x:40, y:220, z:0},{x:60, y:200, z:0},{x:60, y:220, z:0},{x:80, y:200, z:0},{x:80, y:220, z:0},{x:100, y:200, z:0},{x:100, y:220, z:0},{x:120, y:200, z:0},{x:120, y:220, z:0},{x:140, y:200, z:0},{x:140, y:220, z:0},{x:160, y:200, z:0},{x:160, y:220, z:0},{x:180, y:200, z:0},{x:180, y:220, z:0},{x:200, y:200, z:0},{x:200, y:220, z:0},{x:220, y:200, z:0}, {x:220, y:220, z:0},{x:240, y:200, z:0},{x:240, y:220, z:0},{x:0, y:220, z:0},{x:0, y:240, z:0},{x:20, y:220, z:0},{x:20, y:240, z:0},{x:40, y:220, z:0},{x:40, y:240, z:0},{x:60, y:220, z:0},{x:60, y:240, z:0},{x:80, y:220, z:0},{x:80, y:240, z:0}, {x:100, y:220, z:0}, {x:100, y:240, z:0}, {x:120, y:220, z:0}, {x:120, y:240, z:0}, {x:140, y:220, z:0}, {x:140, y:240, z:0}, {x:160, y:220, z:0}, {x:160, y:240, z:0}, {x:180, y:220, z:0}, {x:180, y:240, z:0}, {x:200, y:220, z:0}, {x:200, y:240, z:0}, {x:220, y:220, z:0}, {x:220, y:240, z:0}, {x:240, y:220, z:0}, {x:240, y:240, z:0}]

var mimoText;
function preload() {
      mimoAmsterdam = ["mimoTraces/	003.jpg	", "mimoTraces/	004.jpg	", "mimoTraces/	005.jpg	", "mimoTraces/	025.png	", "mimoTraces/	026.png	", "mimoTraces/	027.png	", "mimoTraces/	028.png	", "mimoTraces/	029.png	", "mimoTraces/	030.png	", "mimoTraces/	031.png	", "mimoTraces/	032.png	", "mimoTraces/	033.png	", "mimoTraces/	034.png	", "mimoTraces/	035.png	", "mimoTraces/	036.png	", "mimoTraces/	037.png	", "mimoTraces/	038.png	", "mimoTraces/	102.jpg	", "mimoTraces/	103.jpg	", "mimoTraces/	104.jpg	", "mimoTraces/	105.jpg	", "mimoTraces/	106.jpg	", "mimoTraces/	107.jpg	", "mimoTraces/	108.jpg	", "mimoTraces/	109.jpg	", "mimoTraces/	110.jpg	", "mimoTraces/	121.jpg	", "mimoTraces/	122.jpg	", "mimoTraces/	123.jpg	", "mimoTraces/	124.jpg	", "mimoTraces/	125.jpg	", "mimoTraces/	126.jpg	", "mimoTraces/	127.jpg	", "mimoTraces/	128.jpg	", "mimoTraces/	212.jpg	", "mimoTraces/	213.jpg	", "mimoTraces/	214.jpg	", "mimoTraces/	215.jpg	", "mimoTraces/	230.jpg	", "mimoTraces/	231.jpg	", "mimoTraces/	232.jpg	", "mimoTraces/	233.jpg	", "mimoTraces/	235.jpg	", "mimoTraces/	236.jpg	", "mimoTraces/	325.jpg	"];
      pictures = ['thingies/beige.png', 'thingies/pinkpatch.png', 'thingies/plantplastic.png', 'thingies/polkaslink.png', 'thingies/posterpatch.png', 'thingies/posters.png', 'thingies/prepillowcreature.png'];

      train = loadModel('models/agrisphere-stones-obj/agrisphere-stones.obj');
      rand = loadImage(random(pictures));
      amstrand = loadImage(random(mimoAmsterdam));

      mimoText = createGraphics(200, 200);
      mimoText.text("A curatorial process for the activation of minor movements requires an attunement to the conditions that select for artfulness", 100, 100);

}

function setup() {
  fabb = createCanvas(windowWidth, windowHeight, WEBGL);
  fabb.parent('fabmap');

  // button = createButton('+');
  // button.position(19, 19);
  // button.mousePressed(zoomOut);
  //
  // button2 = createButton('-');
  // button2.position(19, 40);
  // button2.mousePressed(zoomIn);

  sliderX = createSlider(-1000, 1000, 0);
  sliderX.position(19, 20);
  sliderY = createSlider(-1000, 1000, 0);
  sliderY.position(19, 40);
  sliderZ = createSlider(-1000, 1000, -1000);
  sliderZ.position(19, 60);


  thingies = new Bubble(pictures, 10, 10, 10);

  amst = new Bubble(mimoAmsterdam, 100, 100);
  amst2 = new Bubble(mimoAmsterdam, 100, 100);
  amst3 = new Bubble(mimoAmsterdam, 100, 100);



}

function draw() {
  camera(sliderX.value(), sliderY.value(), sliderZ.value(), 0, 0, 0, 0, 1, 0);
  background(0, 0, 0, 0.2);
  noStroke();
  // rotateY(frameCount * 0.01);
  // translate(0, 100, -400);
  // push();
  // thingies.plan();
  // pop();
  //
  //

  //
  //
  // push();
  // translate(100, 0, -400);
  // noStroke();
  // amst2.plan();
  // pop();
  //
  
  textureWrap(CLAMP);
  textureMode(NORMAL);
  scale(2);
  push();
  rotateZ(radians(10));
    fill(255);
    translate(-200, -200, -200);
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i < c.length; i++){
        texture(rand);
        var img = rand;
        let coord = c[i];
        let u = map(coord.x, -img.width * uval, img.width * 0.5, 0, 1);
        let v = map(coord.y, -img.height * uval, img.height * 0.5, 1, 0);
        if (dist(mouseX - width /2, mouseY - height/ 2, coord.x-200, coord.y-200)<70){
                coord.z = coord.z * 2;
              }
        vertex(coord.x, coord.y, coord.z, u, v);
      }
    endShape();
  pop();

  push();
  rotateY(radians(120));
    fill(255);
    translate(200, -100, 200);
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i < c.length; i++){
        texture(amstrand);
        var img = amstrand;
        let coord = c[i];
        let u = map(coord.x, -img.width * uval, img.width * 0.5, 0, 1);
        let v = map(coord.y, -img.height * uval, img.height * 0.5, 1, 0);
        if (dist(mouseX - width /2, mouseY - height/ 2, coord.x+200, coord.y+200)<70){
                coord.z+=2;
              }
        vertex(coord.x, coord.y, coord.z, u, v);
      }
    endShape();
  pop();

  push();
  // rotateY(frameCount * 0.01);

    fill(255);
    translate(-350, 200);
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i < c.length; i++){
        // texture(mimoText);
        // var img = mimoText;
        texture(amstrand);
        var img = amstrand;
        let coord = c[i];
        let u = map(coord.x, -img.width * uval, img.width * 0.5, 0, 1);
        let v = map(coord.y, -img.height * uval, img.height * 0.5, 1, 0);
        if (dist(mouseX - width /2, mouseY - height/ 2, coord.x, coord.y)<7){
                coord.z+=2;
              }
        vertex(coord.x, coord.y, svvi(coord.z), u, v);
      }
    endShape();
  pop();

}

// function mousePressed(){
//   thingies.newTex();
//   amst.newTex();
// }

// function zoomOut() {
//   cameraZ = cameraZ+100;
//   console.log(cameraZ);
// }
// function zoomIn() {
//   cameraZ = cameraZ-100;
//   console.log(cameraZ);
// }

// //make 5 rocks
//   rotateY(frameCount * 0.01);
//   for (let j = 0; j < 5; j++) {
//    push();
//    for (let i = 0; i < 2; i++) {
//      translate(
//        sin(frameCount * 0.02 + j) * 100,
//        -cos(frameCount * 0.001 + j) * 100,
//        sin(frameCount * 0.001 + j) * 100,
//      );
//      i * 0.1
//      rotateZ(frameCount * 0.002);
//   push();
//   noStroke();
//   scale(100);
//   txtr = texture(rand);
//   model(train);
//   pop();
//   // tr = 0;
//   }
// }
// pop();

function svvi(x){
  var y = sin(x/(sin(x/30)*10+290))*500;
    // console.log(y);
  return y;
  // console.log(y);
}
