
var im;
var quilt;
var quilt2;
var quilt3;
var quilt4;
let pictures=[];
let rand;

function preload(){
  pictures = [
    loadImage('mmm/saopaulo/quilt1.png'),
    loadImage('mmm/saopaulo/quilt2.png'),
    loadImage('mmm/saopaulo/quilt3.png'),
    loadImage('mmm/saopaulo/quilt4.png')
    // loadImage('mmm/saopaulo/quilt5.png'),
    // loadImage('mmm/saopaulo/quilt6.png'),
    // loadImage('mmm/saopaulo/quilt7.png'),
    // loadImage('mmm/saopaulo/quilt8.png'),
    // loadImage('mmm/saopaulo/quilt9.png'),
    // loadImage('mmm/saopaulo/quilt10.png'),
    // loadImage('mmm/saopaulo/quilt11.png')
  ];
}

function setup(){
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  pg = createGraphics(200, 200);
  pg.textSize(12);
  quilt = new Bubble;
  quilt2 = new Bubble;
  quilt3 = new Bubble;
  quilt4 = new Bubble;
  rand = random(pictures);
}

function draw(){
    background(0, 18, 120, 1);
    orbitControl();
  // transform(300,300);
  // pg.background('blue');
  // pg.text("med last night, because the doctor dreamed it too;differences, in which", x, 100);
  // texture(pg);
  // plane(1000,1000);
    push();
    rotateX(radians(130));
    quilt.huge();
    pop();


    push();
    rotateX(radians(130));
    translate(-100, -100);
    quilt.show();
    pop();

    push();
    rotateX(radians(95));
    translate(100, 100, 400);
    quilt2.plan();
    pop();

    push();
    rotateX(radians(45));
    translate(200, -10);
    quilt3.plan();
    pop();

    push();
    quilt4.plan();
    pop();
    //
  // beginShape();
  // fill('yellow');
  // noStroke();
  // vertex(x,255);
  // vertex(200,30);
  // vertex(20,490);
  // vertex(48,x-20);
  // vertex(637,255);
  // endShape();

  // beginShape();
  // //fill('green');
  // rand;
  // noStroke();
  // vertex(100,255, 0, 20);
  // vertex(200,30, 200, 2);
  // vertex(20,490, 203, 30);
  // vertex(48, 80, 200, 30);
  // vertex(637, 255, 200, 3);
  // endShape();
  //
  // beginShape();
  // texture(im);
  // vertex(10, x, 0, 0);
  // vertex(80, 5, 100, 0);
  // vertex(95, 90, x-200, 100);
  // vertex(40, 95, 0, 100);
  // endShape();

}
