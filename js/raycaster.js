const objects = [];
let eyeZ;
let pictures;
let rand;
let txtr;
let rand2;
let txtr2;
var sliderX, sliderY, sliderZ;
var cameraX, cameraY, cameraZ;

function preload(){
  pictures = ['thingies/beige.png',
               'thingies/pinkpatch.png',
               'thingies/plantplastic.png',
               'thingies/polkaslink.png',
               'thingies/posterpatch.png',
               'thingies/posters.png',
               'thingies/prepillowcreature.png'
             ];
 rand = loadImage(random(pictures));
 rand2 = loadImage(pictures[0]);

}

function setup() {
  createCanvas(710, 400, WEBGL);

  // eyeZ = height / 2 / tan((30 * PI) / 180); // The default distance the camera is away from the origin.

  objects.push(new IntersectPlane(1, 0, 0, -100, 0, 0)); // Left wall
  objects.push(new IntersectPlane(1, 0, 0, 100, 0, 0)); // Right wall
  objects.push(new IntersectPlane(0, 1, 0, 0, -100, 0)); // Bottom wall
  objects.push(new IntersectPlane(0, 1, 0, 0, 100, 0)); // Top wall
  objects.push(new IntersectPlane(0, 0, 1, 0, 0, 0)); // Back wall

  noStroke();
  ambientMaterial(250);

  txtr2 = texture(rand2);
  txtr = texture(rand);
  sliderX = createSlider(-1000, 1000, 0);
  sliderX.position(19, 20);
  sliderY = createSlider(-1000, 1000, 429);
  sliderY.position(19, 40);
  sliderZ = createSlider(-1000, 1000, 226);
  sliderZ.position(19, 60);
}

function draw() {
  camera(cameraX, cameraY, cameraZ, 0, 0, 0, 0, 1, 0);
  cameraX = sliderX.value()
  cameraY = sliderY.value()
  cameraZ = sliderZ.value()
  background(0);

  // Lights
  pointLight(255, 255, 255, 0, 0, 400);
  ambientLight(244, 122, 158);
  txtr;
  // Left wall
  push();
  txtr;
  translate(-100, 0, 200);
  rotateY((90 * PI) / 180);
  plane(400, 200);
  pop();

  // Right wall
  push();
  translate(100, 0, 200);
  rotateY((90 * PI) / 180);
  plane(400, 200);
  pop();

  // Bottom wall
  push();
  translate(0, 100, 200);
  rotateX((90 * PI) / 180);
  txtr2;
  plane(200, 400);
  pop();
txtr2;
  // Top wall
  push();
  translate(0, -100, 200);
  rotateX((90 * PI) / 180);
  rotateZ(sin(frameCount * 0.002));
  plane(200, 400);
  pop();

  plane(200, 200); // Back wall

  const x = mouseX - width / 2;
  const y = mouseY - height / 2;

  const Q = createVector(0, 0, cameraZ); // A point on the ray and the default position of the camera.
  const v = createVector(x, y, -cameraZ); // The direction vector of the ray.

  let intersect; // The point of intersection between the ray and a plane.
  let closestLambda = cameraZ * 10; // The draw distance.

  for (let x = 0; x < objects.length; x += 1) {
    let object = objects[x];
    let lambda = object.getLambda(Q, v); // The value of lambda where the ray intersects the object

    if (lambda < closestLambda && lambda > 0) {
      // Find the position of the intersection of the ray and the object.
      intersect = p5.Vector.add(Q, p5.Vector.mult(v, lambda));
      closestLambda = lambda;
    }
  }

  // Cursor
  push();
  translate(intersect);
  fill(237, 34, 93);
  sphere(10);
  pop();
}

// Class for a plane that extends to infinity.
class IntersectPlane {
  constructor(n1, n2, n3, p1, p2, p3) {
    this.normal = createVector(n1, n2, n3); // The normal vector of the plane
    this.point = createVector(p1, p2, p3); // A point on the plane
    this.d = this.point.dot(this.normal);
  }

  getLambda(Q, v) {
    return (-this.d - this.normal.dot(Q)) / this.normal.dot(v);
  }
}
