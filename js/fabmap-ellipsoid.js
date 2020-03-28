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
var mimoAmsterdam, mimoBerlin, mimoSaoPaulo, mimoBudapest, mimoCopenhagen, mimoZurich, mimoLondon, mimoEdinburgh, mimoCluj, mimoMontreal, mimoHelsinki, mimoOz, mimoSpaze, mimoUspaz;
var mimo = ["Minor movements are not ours to make so much as ours to attune to", "A curatorial process for the activation of minor movements requires an attunement to the conditions that select for artfulness", "An attunement to artfulness opens the work to its more-than", "The more-than is what is curated", "An environment is activated, an enlivening of an ecology", "With the enlivening comes a felt experience of time bending", "Time bending moves experience to its emergent unfolding", "In this emergent unfolding we are not spectators", "Emergent unfoldings affect the environment they co-compose", "We are part of that co-composition", "To compose a minor movement is to be composed by it", "A curatorial process for the activation of minor movements requires an active shift in the presupposition that there is a field of art and a field of life", "The political runs through the differential that is composed when the binary between art and life is undone", "What mattters is not whether it is art, but how it shifts the conditions of experience", "When art becomes the way and not the endpoint minor movements become orientors for processes to come."];

var mimoText;
function preload() {
      mimoAmsterdam = ["mimoTraces/003.jpg", "mimoTraces/004.jpg", "mimoTraces/005.jpg", "mimoTraces/025.png", "mimoTraces/026.png", "mimoTraces/027.png", "mimoTraces/028.png", "mimoTraces/029.png", "mimoTraces/030.png", "mimoTraces/031.png", "mimoTraces/032.png", "mimoTraces/033.png", "mimoTraces/034.png", "mimoTraces/035.png", "mimoTraces/036.png", "mimoTraces/037.png", "mimoTraces/038.png", "mimoTraces/102.jpg", "mimoTraces/103.jpg", "mimoTraces/104.jpg", "mimoTraces/105.jpg", "mimoTraces/106.jpg", "mimoTraces/107.jpg", "mimoTraces/108.jpg", "mimoTraces/109.jpg", "mimoTraces/110.jpg", "mimoTraces/121.jpg", "mimoTraces/122.jpg", "mimoTraces/123.jpg", "mimoTraces/124.jpg", "mimoTraces/125.jpg", "mimoTraces/126.jpg", "mimoTraces/127.jpg", "mimoTraces/128.jpg", "mimoTraces/212.jpg", "mimoTraces/213.jpg", "mimoTraces/214.jpg", "mimoTraces/215.jpg", "mimoTraces/230.jpg", "mimoTraces/231.jpg", "mimoTraces/232.jpg", "mimoTraces/233.jpg", "mimoTraces/235.jpg", "mimoTraces/236.jpg", "mimoTraces/325.jpg", "mimoTraces/234.jpg"];
      mimoBerlin = ["mimoTraces/096.pg", "mimoTraces/097.jpg", "mimoTraces/098.jpg", "mimoTraces/099.jpg", "mimoTraces/100.jpg", "mimoTraces/101.jpg", "mimoTraces/237.jpg", "mimoTraces/238.jpg", "mimoTraces/239.jpg", "mimoTraces/240.jpg", "mimoTraces/241.jpg", "mimoTraces/242.jpg", "mimoTraces/243.jpg", "mimoTraces/244.jpg", "mimoTraces/245.jpg"];
      mimoSaoPaulo = ["mimoTraces/012.jpg", "mimoTraces/260.jpg", "mimoTraces/308.png", "mimoTraces/309.png","mimoTraces/052.png", "mimoTraces/055.png", "mimoTraces/057.png", "mimoTraces/484.png", "mimoTraces/485.png", "mimoTraces/486.png", "mimoTraces/487.png", "mimoTraces/488.png", "mimoTraces/489.png", "mimoTraces/490.png", "mimoTraces/491.png", "mimoTraces/492.png", "mimoTraces/494.png", "mimoTraces/495.png", "mimoTraces/496.png", "mimoTraces/497.png", "mimoTraces/498.png", "mimoTraces/499.png", "mimoTraces/500.png", "mimoTraces/501.png", "mimoTraces/502.png", "mimoTraces/503.png", "mimoTraces/504.png"];
      mimoBudapest = ["mimoTraces/018.jpg", "mimoTraces/019.jpg", "mimoTraces/020.jpg", "mimoTraces/021.jpeg", "mimoTraces/157.jpg", "mimoTraces/158.jpg", "mimoTraces/159.jpg", "mimoTraces/160.jpg", "mimoTraces/161.jpg", "mimoTraces/162.jpg", "mimoTraces/163.jpg"];
      mimoCopenhagen = ["mimoTraces/010.jpg", "mimoTraces/011.jpg", "mimoTraces/044.jpg", "mimoTraces/047.jpg", "mimoTraces/050.jpg", "mimoTraces/053.jpg", "mimoTraces/056.jpg", "mimoTraces/058.jpg", "mimoTraces/060.jpg", "mimoTraces/062.jpg", "mimoTraces/064.jpg", "mimoTraces/066.jpg", "mimoTraces/067.jpg", "mimoTraces/068.jpg", "mimoTraces/069.jpg", "mimoTraces/070.jpg", "mimoTraces/071.jpg", "mimoTraces/072.jpg", "mimoTraces/073.jpg", "mimoTraces/074.jpg", "mimoTraces/075.jpg", "mimoTraces/076.jpg", "mimoTraces/077.jpg", "mimoTraces/078.jpg", "mimoTraces/079.jpg", "mimoTraces/080.jpg", "mimoTraces/081.jpg", "mimoTraces/082.jpg", "mimoTraces/083.jpg", "mimoTraces/084.jpg", "mimoTraces/085.jpg", "mimoTraces/086.jpg", "mimoTraces/087.jpg", "mimoTraces/088.jpg", "mimoTraces/089.jpg", "mimoTraces/090.jpg", "mimoTraces/091.jpg", "mimoTraces/092.jpg", "mimoTraces/115.jpg", "mimoTraces/129.jpg", "mimoTraces/130.jpg", "mimoTraces/135.jpg", "mimoTraces/152.jpg", "mimoTraces/153.jpg", "mimoTraces/246.jpg", "mimoTraces/247.jpg", "mimoTraces/248.jpg", "mimoTraces/249.jpg", "mimoTraces/250.jpg", "mimoTraces/251.jpg", "mimoTraces/252.jpg", "mimoTraces/253.jpg", "mimoTraces/254.jpg", "mimoTraces/255.jpg", "mimoTraces/256.jpg", "mimoTraces/257.jpg", "mimoTraces/312.jpg", "mimoTraces/313.jpg", "mimoTraces/323.png", "mimoTraces/326.jpg", "mimoTraces/054.png", "mimoTraces/310.png"]
      mimoZurich = [];
      mimoLondon = ["mimoTraces/001.jpeg", "mimoTraces/002.jpeg", "mimoTraces/039.jpg", "mimoTraces/040.jpg", "mimoTraces/041.jpg", "mimoTraces/042.jpg",];
      mimoEdinburgh = ["mimoTraces/023.jpg"];
      mimoCluj = [];
      mimoMontreal = ["mimoTraces/155.png", "mimoTraces/013.jpg", "mimoTraces/014.jpg", "mimoTraces/015.jpg", "mimoTraces/016.jpg", "mimoTraces/017.jpg", "mimoTraces/131.jpg", "mimoTraces/132.jpg", "mimoTraces/133.jpg", "mimoTraces/134.jpg", "mimoTraces/136.jpg", "mimoTraces/137.jpg", "mimoTraces/139.jpg", "mimoTraces/140.jpg", "mimoTraces/141.jpg", "mimoTraces/142.jpg", "mimoTraces/143.jpg", "mimoTraces/144.jpg", "mimoTraces/145.jpg", "mimoTraces/146.jpg", "mimoTraces/147.jpg", "mimoTraces/148.jpg", "mimoTraces/149.jpg", "mimoTraces/150.jpg", "mimoTraces/151.jpg", "mimoTraces/156.jpg", "mimoTraces/205.jpg", "mimoTraces/206.jpg", "mimoTraces/207.jpg", "mimoTraces/216.jpg", "mimoTraces/217.jpg", "mimoTraces/218.jpg", "mimoTraces/219.jpg", "mimoTraces/220.jpg", "mimoTraces/221.jpg", "mimoTraces/222.jpg", "mimoTraces/223.jpg", "mimoTraces/275.png", "mimoTraces/276.png", "mimoTraces/277.png", "mimoTraces/278.png", "mimoTraces/279.png", "mimoTraces/280.png", "mimoTraces/281.png", "mimoTraces/282.png", "mimoTraces/283.png", "mimoTraces/284.png", "mimoTraces/285.png", "mimoTraces/286.png", "mimoTraces/287.png", "mimoTraces/288.png", "mimoTraces/289.png", "mimoTraces/290.png", "mimoTraces/291.png", "mimoTraces/292.png", "mimoTraces/293.png", "mimoTraces/294.png", "mimoTraces/295.png", "mimoTraces/296.png", "mimoTraces/297.png", "mimoTraces/298.png", "mimoTraces/299.png", "mimoTraces/300.png", "mimoTraces/301.png", "mimoTraces/302.png", "mimoTraces/303.png", "mimoTraces/304.png", "mimoTraces/305.png", "mimoTraces/306.png", "mimoTraces/307.png", "mimoTraces/321.png", "mimoTraces/322.png", "mimoTraces/327.jpg", "mimoTraces/408.jpg", "mimoTraces/419.jpg", "mimoTraces/420.gif", "mimoTraces/422.png", "mimoTraces/424.jpg", "mimoTraces/120.jpg"];
      mimoHelsinki = ["mimoTraces/006.jpg", "mimoTraces/007.jpg", "mimoTraces/008.jpg", "mimoTraces/009.jpg", "mimoTraces/024.jpg", "mimoTraces/045.png", "mimoTraces/048.png", "mimoTraces/051.jpg", "mimoTraces/093.jpg", "mimoTraces/094.jpg", "mimoTraces/095.jpg", "mimoTraces/117.png", "mimoTraces/118.jpg", "mimoTraces/138.jpg", "mimoTraces/154.jpg", "mimoTraces/320.gif", "mimoTraces/324.png"];
      mimoOz = ["mimoTraces/316.jpg", "mimoTraces/317.jpg", "mimoTraces/318.jpg", "mimoTraces/319.jpeg", "mimoTraces/328.jpg", "mimoTraces/329.jpg", "mimoTraces/330.jpg", "mimoTraces/331.jpg", "mimoTraces/332.jpg", "mimoTraces/333.jpg", "mimoTraces/334.jpg", "mimoTraces/335.jpg", "mimoTraces/336.jpg", "mimoTraces/337.jpg", "mimoTraces/338.jpg", "mimoTraces/339.jpg", "mimoTraces/340.jpg", "mimoTraces/341.jpg", "mimoTraces/342.jpg", "mimoTraces/343.jpg", "mimoTraces/344.jpg", "mimoTraces/345.jpg", "mimoTraces/346.jpg", "mimoTraces/347.jpg", "mimoTraces/348.jpg", "mimoTraces/349.jpg", "mimoTraces/350.jpg", "mimoTraces/351.jpg", "mimoTraces/352.jpg", "mimoTraces/353.jpg", "mimoTraces/354.jpg", "mimoTraces/355.jpg", "mimoTraces/356.jpg", "mimoTraces/357.jpg", "mimoTraces/358.jpg", "mimoTraces/359.jpg", "mimoTraces/360.jpg", "mimoTraces/361.jpg", "mimoTraces/362.jpg", "mimoTraces/363.jpg", "mimoTraces/364.jpg", "mimoTraces/365.jpg", "mimoTraces/366.jpg", "mimoTraces/367.jpg", "mimoTraces/368.jpg", "mimoTraces/369.jpg", "mimoTraces/370.jpg", "mimoTraces/371.jpg", "mimoTraces/372.jpg", "mimoTraces/373.jpg", "mimoTraces/374.jpg", "mimoTraces/375.jpg", "mimoTraces/376.jpg", "mimoTraces/377.jpg", "mimoTraces/378.jpg", "mimoTraces/379.jpg", "mimoTraces/380.jpg", "mimoTraces/381.jpg", "mimoTraces/382.jpg", "mimoTraces/383.jpg", "mimoTraces/384.jpg", "mimoTraces/385.jpg", "mimoTraces/386.jpg", "mimoTraces/387.jpg", "mimoTraces/388.jpg", "mimoTraces/389.jpg", "mimoTraces/390.jpg", "mimoTraces/391.jpg", "mimoTraces/392.jpg", "mimoTraces/393.jpg", "mimoTraces/394.jpg", "mimoTraces/395.jpg", "mimoTraces/396.jpg", "mimoTraces/397.jpg", "mimoTraces/398.jpg", "mimoTraces/399.jpg", "mimoTraces/400.jpg", "mimoTraces/401.jpg", "mimoTraces/402.jpg", "mimoTraces/403.jpg", "mimoTraces/404.jpg", "mimoTraces/405.jpg", "mimoTraces/406.jpg", "mimoTraces/407.jpg", "mimoTraces/409.jpg", "mimoTraces/410.jpg", "mimoTraces/411.jpg", "mimoTraces/412.jpg", "mimoTraces/413.jpg", "mimoTraces/414.jpg", "mimoTraces/415.jpg", "mimoTraces/416.jpg", "mimoTraces/417.jpg", "mimoTraces/418.jpg", "mimoTraces/421.jpg", "mimoTraces/423.jpg", "mimoTraces/425.jpg", "mimoTraces/426.jpg", "mimoTraces/427.jpg", "mimoTraces/428.jpg", "mimoTraces/429.JPG", "mimoTraces/430.JPG", "mimoTraces/431.JPG", "mimoTraces/432.JPG", "mimoTraces/433.JPG", "mimoTraces/434.JPG", "mimoTraces/435.JPG", "mimoTraces/436.JPG", "mimoTraces/437.JPG", "mimoTraces/438.JPG", "mimoTraces/439.JPG", "mimoTraces/440.JPG", "mimoTraces/441.JPG", "mimoTraces/442.JPG", "mimoTraces/443.JPG", "mimoTraces/444.JPG", "mimoTraces/445.JPG", "mimoTraces/446.JPG", "mimoTraces/447.JPG", "mimoTraces/448.JPG", "mimoTraces/449.JPG", "mimoTraces/450.JPG", "mimoTraces/451.JPG", "mimoTraces/452.JPG", "mimoTraces/453.JPG", "mimoTraces/454.JPG", "mimoTraces/455.png", "mimoTraces/456.png", "mimoTraces/457.png", "mimoTraces/458.png", "mimoTraces/459.jpg", "mimoTraces/460.jpg", "mimoTraces/461.jpg", "mimoTraces/462.jpg", "mimoTraces/463.jpg", "mimoTraces/464.jpg", "mimoTraces/465.jpg", "mimoTraces/466.jpg", "mimoTraces/467.jpg", "mimoTraces/468.jpg", "mimoTraces/469.jpg", "mimoTraces/470.jpg", "mimoTraces/471.jpg", "mimoTraces/472.jpg", "mimoTraces/473.jpg", "mimoTraces/474.png", "mimoTraces/475.png", "mimoTraces/476.png", "mimoTraces/477.png", "mimoTraces/478.png", "mimoTraces/479.jpg"];
      mimoSpaze = ["mimoTraces/022.jpeg", "mimoTraces/111.jpg", "mimoTraces/164.jpg", "mimoTraces/165.jpg", "mimoTraces/166.jpg", "mimoTraces/167.jpg", "mimoTraces/168.jpg", "mimoTraces/169.jpg", "mimoTraces/170.jpg", "mimoTraces/171.jpg", "mimoTraces/172.jpg", "mimoTraces/173.jpg", "mimoTraces/174.jpg", "mimoTraces/175.jpg", "mimoTraces/176.jpg", "mimoTraces/177.jpg", "mimoTraces/178.jpg", "mimoTraces/179.jpg", "mimoTraces/180.jpg", "mimoTraces/181.jpg", "mimoTraces/182.jpg", "mimoTraces/183.jpg", "mimoTraces/184.jpg", "mimoTraces/185.jpg", "mimoTraces/186.jpg", "mimoTraces/188.jpg", "mimoTraces/211.jpg", "mimoTraces/224.jpg", "mimoTraces/225.jpg", "mimoTraces/226.jpg", "mimoTraces/227.jpg", "mimoTraces/228.jpg", "mimoTraces/229.jpg", "mimoTraces/262.png", "mimoTraces/263.png", "mimoTraces/264.png", "mimoTraces/265.png", "mimoTraces/266.png", "mimoTraces/267.png", "mimoTraces/268.png", "mimoTraces/269.png", "mimoTraces/270.png", "mimoTraces/271.png", "mimoTraces/272.png", "mimoTraces/273.png", "mimoTraces/274.png", "mimoTraces/480.png", "mimoTraces/481.png", "mimoTraces/482.png", "mimoTraces/483.png", "mimoTraces/493.png"];
      mimoUspaz = ["mimoTraces/043.jpg", "mimoTraces/046.jpg", "mimoTraces/049.jpg", "mimoTraces/059.jpg", "mimoTraces/061.jpg", "mimoTraces/063.jpg", "mimoTraces/065.jpg", "mimoTraces/112.jpg", "mimoTraces/114.jpg", "mimoTraces/119.jpg", "mimoTraces/187.jpg", "mimoTraces/189.jpg", "mimoTraces/190.jpg", "mimoTraces/191.jpg", "mimoTraces/192.jpg", "mimoTraces/193.jpg", "mimoTraces/195.jpg", "mimoTraces/196.jpg", "mimoTraces/197.jpg", "mimoTraces/198.jpg", "mimoTraces/199.jpg", "mimoTraces/200.jpg", "mimoTraces/201.jpg", "mimoTraces/202.pg", "mimoTraces/203.jpg", "mimoTraces/204.jpg", "mimoTraces/208.jpg", "mimoTraces/209.jpg", "mimoTraces/210.jpg", "mimoTraces/258.tiff", "mimoTraces/259.tiff", "mimoTraces/113.jpg", "mimoTraces/116.png", "mimoTraces/194.jpg", "mimoTraces/311.png"];
      pictures = ['thingies/beige.png', 'thingies/pinkpatch.png', 'thingies/plantplastic.png', 'thingies/polkaslink.png', 'thingies/posterpatch.png', 'thingies/posters.png', 'thingies/prepillowcreature.png'];
      rand = loadImage(random(mimoAmsterdam));
}

function setup() {
  fabb = createCanvas(windowWidth, windowHeight, WEBGL);
  fabb.parent('fabmap');
  fabb.mousePressed(pauseCanvas);

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

// function zoomOut() {
//   cameraZ = cameraZ+1000;
//   console.log(cameraZ);
//
// }
// function zoomIn() {
//   cameraZ = cameraZ-1000;
//   console.log(cameraZ);
// }

function pauseCanvas() {
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
      save(img, 'mimo-sticker.png');
    }
  }
