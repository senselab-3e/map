let angle = 0;
let kitten;
let train;
let flower;
let thingie;
let rock;
let coffee;

var pictures;
let bubble1;
let bubble2;
let bubble3;
let bubble4;

function preload() {
  kitten = loadImage('images/img2.png');
  thingie = loadImage('thingies/cephskin.png');

  pictures = [loadImage('thingies/beige.png'),
            loadImage('thingies/chairwbowl.png'),
            loadImage('thingies/brownrck.png'),
            loadImage('thingies/claybowl.png'),
            loadImage('thingies/cephskin.png'),
            loadImage('thingies/chairshark.png'),
            loadImage('thingies/chairwbowl.png'),
            loadImage('thingies/circlemetal.png'),
            loadImage('thingies/claybowl.png'),
            loadImage('thingies/compost.png'),
            loadImage('thingies/pinkbowl.png'),
            loadImage('thingies/corlarock.png'),
            loadImage('thingies/drawerbox.png'),
            loadImage('thingies/metaltape.png'),
            loadImage('thingies/mintwashu.png'),
            loadImage('thingies/mirrortape.png'),
            loadImage('thingies/onpic.png'),
            loadImage('thingies/opurple.png'),
            loadImage('thingies/pinkbowlsid.png'),
            loadImage('thingies/pinkpatch.png'),
            loadImage('thingies/plantplastic.png'),
            loadImage('thingies/polkaslink.png'),
            loadImage('thingies/posterpatch.png'),
            loadImage('thingies/posters.png'),
            loadImage('thingies/prepillowcreature.png'),
            loadImage('images/img0.jpg')
          ];


  // flower = loadModel('models/flower-obj/flower.obj');
  rock = loadModel('models/rocks-obj/rocks.obj');
  train = loadModel('models/agrisphere-stones-obj/agrisphere-stones.obj');
  coffee = loadModel('models/cup-coffee.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  bubble4 = new Bubble();
}

function draw() {
  background(0);
  orbitControl();
  // ambientLight(255, 0, 255);
  // directionalLight(255, 255, 255, 0, 0, 1);
  // rotateX(angle);
  // rotateY(angle * 1.3);
  // rotateZ(angle * 0.7);
  // box(100);
  push();
  translate(0, 0, 0);
  scale(100);
  texture(kitten);
  model(train);
  pop();

  push();
  translate(10, 10, 10);
  scale(100);
  texture(thingie);
  model(rock);
  pop();
  // angle += 0.03;


  push();
  rotateY(radians(25));
  translate(100, 100, 100);
  bubble1.huge();
  pop();


  push();
  translate(100, 100, 100);
  bubble2.show();
  pop();

  push();
  translate(-350, -350);
  bubble3.show();
  pop();

  push();
  translate(250, -400);
  rotateY(radians(45));
  bubble3.plan();
  pop();

  push();
  // let jump = jump + 1;
  // beginShape();
  // fill('yellow');
  // noStroke();
  // vertex(jump,255);
  // vertex(200,30);
  // vertex(20,490);
  // vertex(48,jump-20);
  // vertex(637,255);
  // endShape();
  texture(pictures[0]);
  translate(-50, -50);
  beginShape();
  vertex(-50, 0, 0, 0, 0);
  vertex(100, 0, 0, 1, 0);
  vertex(100, 100, 0, 1, 1);
  vertex(0, 200, 0, 0, 1);
  endShape(CLOSE);
  pop();

  push();
  texture(pictures[0]);
  scale(100);
  model(coffee);
  pop();

}
