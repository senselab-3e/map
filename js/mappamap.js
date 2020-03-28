var t = function( p ) {
  let myMap;
  let canvas;
  let compost, claybowl, chairshark, sponges, orange, purple, quilt;
  const mappa = new Mappa('Leaflet');

  const options = {
    lat: 120.5017,
    lng: -0.5673,
    zoom: 4,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    // style: "http://{s}.3e-pr0cess-s33dbank.com/thingies/{z}/{x}/{y}{r}.png";
  }
    p.preload = function() {
    compost = loadImage('thingies/compost.png');
    claybowl = loadImage('thingies/claybowl.png');
    chairshark = loadImage('thingies/chairshark.png');
    sponges = loadImage('thingies/sponges.png');
    orange = loadImage('thingies/orange2.png');
    purple = loadImage('thingies/thingyyyypurpllle.png');
    quilt = loadImage('thingies/beige.png');
  }
    p.setup = function() {
    canvas = p.createCanvas(windowWidth, 100);
    //background(100);

      myMap = mappa.tileMap(options);
      myMap.overlay(canvas);
      // background('orange');
  }

    p.draw = function() {
    p.fill('orange');
    p.rect(mouseX, mouseY,200,200, 2);
    p.image(orange,mouseX,mouseY,10,10);
    const saopaulo = myMap.latLngToPixel(-23.5505, -46.6333);
    const bendigo = myMap.latLngToPixel(-36.7570, 144.2794);
    const amsterdam = myMap.latLngToPixel(52.3667, 4.8945);
    const copenhagen = myMap.latLngToPixel(55.6761, 12.5683);
    const helsinki = myMap.latLngToPixel(60.1699, 24.9384);
    const montreal = myMap.latLngToPixel(45.5017, -73.5673);
    const zurich = myMap.latLngToPixel(47.3769, 8.5417);
    const budapest = myMap.latLngToPixel(47.4979, 19.0402);
    const manchester = myMap.latLngToPixel(53.4808, 2.2426);
    const berlin = myMap.latLngToPixel(52.5200, 13.4050);
    const edinburgh = myMap.latLngToPixel(55.9533, 3.1883);
    const cluj = myMap.latLngToPixel(46.7712, 23.6236);
    // Using that position, draw an ellipse
    p.stroke('black');
    // strokeWeight(5);
    p.fill('blue');
    p.image(quilt, saopaulo.x, saopaulo.y, 50, 50);
    p.text("proposition for social dreaming", saopaulo.x, saopaulo.y);
    p.fill(86, 134, 215);
    p.image(purple,amsterdam.x, amsterdam.y, 50, 50);
    p.text("amsterdam mimo", amsterdam.x, amsterdam.y);
    p.fill(67, 218, 215);
    p.image(sponges,bendigo.x, bendigo.y, 50, 50);
    p.text("bendigo mimo",bendigo.x, bendigo.y);
    p.fill(58, 36, 215);
    p.image(chairshark,copenhagen.x, copenhagen.y, 50, 50);
    p.text("copey mimo: Infrastructures for un/recommoning", copenhagen.x, copenhagen.y);
    p.fill(138, 211, 215);
    p.image(orange,helsinki.x, helsinki.y, 50, 50);
    p.text("helsi mimo", helsinki.x, helsinki.y);
    p.fill(145, 233, 161);
    p.image(compost,montreal.x, montreal.y, 50, 50);
    p.text("montreal mimo", montreal.x, montreal.y);
    p.fill(49, 59, 166);
    p.image(claybowl,zurich.x, zurich.y, 50, 50);
    p.text("zurich mimo", zurich.x, zurich.y);
    p.fill(65, 125, 166);
    p.image(claybowl,budapest.x, budapest.y, 50, 50);
    p.text("budapest mimo", budapest.x, budapest.y);
    p.fill(27, 125, 166);
    p.image(chairshark,manchester.x, manchester.y, 50, 50);
    p.text("london-manchester mimo", manchester.x, manchester.y);
    p.fill(88, 125, 166);
    p.image(sponges,berlin.x, berlin.y, 50, 50);
    p.text("berL mimo", berlin.x, berlin.y);
    p.fill(101, 193, 223);
    p.image(orange,edinburgh.x, edinburgh.y, 50, 50);
    p.text("edinburgh mimo", edinburgh.x, edinburgh.y);
    p.image(chairshark, cluj.x, cluj.y, 50, 50);
    p.text("cluj mimo", cluj.x, cluj.y);

  }
};
var myp5 = new p5(t, 'c2');
