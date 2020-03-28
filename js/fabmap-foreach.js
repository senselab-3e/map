//rockmodel
let train;
//array of thignies
let pictures = ['thingies/beige.png', 'thingies/pinkpatch.png', 'thingies/plantplastic.png', 'thingies/polkaslink.png', 'thingies/posterpatch.png', 'thingies/posters.png', 'thingies/prepillowcreature.png'];

//obj: thingies
let thingies = [];
//canvas variable
let fabb;
// array: amst mimo
var mimoAmsterdam = ["mimoTraces/	003.jpg	", "mimoTraces/	004.jpg	", "mimoTraces/	005.jpg	", "mimoTraces/	025.png	", "mimoTraces/	026.png	", "mimoTraces/	027.png	", "mimoTraces/	028.png	", "mimoTraces/	029.png	", "mimoTraces/	030.png	", "mimoTraces/	031.png	", "mimoTraces/	032.png	", "mimoTraces/	033.png	", "mimoTraces/	034.png	", "mimoTraces/	035.png	", "mimoTraces/	036.png	", "mimoTraces/	037.png	", "mimoTraces/	038.png	", "mimoTraces/	102.jpg	", "mimoTraces/	103.jpg	", "mimoTraces/	104.jpg	", "mimoTraces/	105.jpg	", "mimoTraces/	106.jpg	", "mimoTraces/	107.jpg	", "mimoTraces/	108.jpg	", "mimoTraces/	109.jpg	", "mimoTraces/	110.jpg	", "mimoTraces/	121.jpg	", "mimoTraces/	122.jpg	", "mimoTraces/	123.jpg	", "mimoTraces/	124.jpg	", "mimoTraces/	125.jpg	", "mimoTraces/	126.jpg	", "mimoTraces/	127.jpg	", "mimoTraces/	128.jpg	", "mimoTraces/	212.jpg	", "mimoTraces/	213.jpg	", "mimoTraces/	214.jpg	", "mimoTraces/	215.jpg	", "mimoTraces/	230.jpg	", "mimoTraces/	231.jpg	", "mimoTraces/	232.jpg	", "mimoTraces/	233.jpg	", "mimoTraces/	235.jpg	", "mimoTraces/	236.jpg	", "mimoTraces/	325.jpg	"];

// obj: amst mimo
var amst, amst2, amst3, amstrand;
//camera Z index
var cameraZ = -200;
//variables
var txtr;
var rand;
// for digestion
var tr;
var rocky;
var mimoText;


// function preload() {
//       mimoAmsterdam = ["mimoTraces/	003.jpg	", "mimoTraces/	004.jpg	", "mimoTraces/	005.jpg	", "mimoTraces/	025.png	", "mimoTraces/	026.png	", "mimoTraces/	027.png	", "mimoTraces/	028.png	", "mimoTraces/	029.png	", "mimoTraces/	030.png	", "mimoTraces/	031.png	", "mimoTraces/	032.png	", "mimoTraces/	033.png	", "mimoTraces/	034.png	", "mimoTraces/	035.png	", "mimoTraces/	036.png	", "mimoTraces/	037.png	", "mimoTraces/	038.png	", "mimoTraces/	102.jpg	", "mimoTraces/	103.jpg	", "mimoTraces/	104.jpg	", "mimoTraces/	105.jpg	", "mimoTraces/	106.jpg	", "mimoTraces/	107.jpg	", "mimoTraces/	108.jpg	", "mimoTraces/	109.jpg	", "mimoTraces/	110.jpg	", "mimoTraces/	121.jpg	", "mimoTraces/	122.jpg	", "mimoTraces/	123.jpg	", "mimoTraces/	124.jpg	", "mimoTraces/	125.jpg	", "mimoTraces/	126.jpg	", "mimoTraces/	127.jpg	", "mimoTraces/	128.jpg	", "mimoTraces/	212.jpg	", "mimoTraces/	213.jpg	", "mimoTraces/	214.jpg	", "mimoTraces/	215.jpg	", "mimoTraces/	230.jpg	", "mimoTraces/	231.jpg	", "mimoTraces/	232.jpg	", "mimoTraces/	233.jpg	", "mimoTraces/	235.jpg	", "mimoTraces/	236.jpg	", "mimoTraces/	325.jpg	"];
//       pictures = ['thingies/beige.png', 'thingies/pinkpatch.png', 'thingies/plantplastic.png', 'thingies/polkaslink.png', 'thingies/posterpatch.png', 'thingies/posters.png', 'thingies/prepillowcreature.png'];
//
//       // train = loadModel('models/agrisphere-stones-obj/agrisphere-stones.obj');
//       // rand = loadImage(random(pictures));
//       // amstrand = loadImage(random(mimoAmsterdam));
// }
var angle = 2.0;
var offset = 300;
var scalar = 3.5;
var speed = 1;

function setup() {
  fabb = createCanvas((mimoAmsterdam.length)*100, windowHeight);
  fabb.parent('fabmap');
}

function draw() {
  mimoAmsterdam.forEach(displayimg);
}

function displayimg(value, index) {
  loadImage(value, img => {
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  ellipse(x, y, 5, 5);
  image(img, x, y, 50, 50);
  angle += speed;
  scalar += speed;
});
}
// function displayimg(value, index) {
//   // loadImage(value, img => {
//   // var x = offset + cos(angle) * scalar;
//   // var y = offset + sin(angle) * scalar;
//   // ellipse(x, y, 5, 5);
//   var im = createImage(value);
//   // im.position(x, y);
//   // angle += speed;
//   // scalar += speed;
// // });
// }

function zoomOut() {
  cameraZ = cameraZ+100;
  console.log(cameraZ);
}
function zoomIn() {
  cameraZ = cameraZ-100;
  console.log(cameraZ);
}
