let verses;
let cards;

function preload(){
verses = [loadImage('cards/acblows.png'),
							 loadImage('cards/appear.png'),
							 loadImage('cards/disapear.png'),
							 loadImage('cards/pool.png'),
			loadImage('cards/thinigess.png'),
			loadImage('cards/splash.png'),
			loadImage('cards/tosink.png'),
			loadImage('cards/ldrmt.png'),
			loadImage('cards/patch.png'),
			loadImage('cards/thresholds.png'),
			loadImage('cards/bonfire.png'),
							 ];
						 }

	function setup(){
		createCanvas(200, windowHeight);

}

	function draw() {
		var i = 0;
		for ( var y= 0; y < height; y = y + 60) {
					cards = image(verses[i % verses.length], 0, y, 200, 120);
					i++
		}
}
