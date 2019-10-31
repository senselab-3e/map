
// let result;
// let x = 100;
// let ind;
//
// function preload() {
//   result = loadStrings('text/minmov.txt');
// }
//
// function setup() {
//   createCanvas(1000, 1000);
//   ind = floor(random(result.length));
//   fill(0);
//   text(result[ind], 10, 10, 80, 80);
//
// }

// function draw(){
//   x = x + 1;
// background(152, 183, 234, 1);

// beginShape();
// fill('yellow');
// noStroke();
// vertex(x,255);
// vertex(200,30);
// vertex(20,490);
// vertex(48,x-20);
// vertex(637,255);
// endShape();
//
// beginShape();
// fill(66, 244, 179);
// noStroke();
// vertex(100,255);
// vertex(200,30);
// vertex(20,490);
// vertex(48,80);
// vertex(637,255);
// endShape();
// }
//  // this works
var txt;

function setup() {
  noCanvas();

  // The second argument to loadStrings() is the name
  // of the function that will run when the file is loaded
  // This is known as a "callback"
  loadStrings('text/minmov.txt', fileready)
    // loadStrings('text/frin.txt', fileready)
}
//
// The data from the file comes in as the array lines
function fileready(lines) {
  // join() joins the elements of an array
  // Here we pass in a line break to retain formatting
  txt = lines.join('<br/>');
  var par = createP(txt);
  par.id('txt');
}
