// let angle = 0;
let kitten;
let train;
let thingie;
let rock;
let coffee;

let pictures;
let bubble1;
let bubble2;
let bubble3;
let bubble4;

let rand;
let rnd;

let picturesbrazil=[];
let fabb;

var value = 0;
var txtr;
let testt;
let mimo;
function preload() {
  mimo = ["http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_1897.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_1908.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_1921.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_1924.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_1925.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_2009 - Ben Muñoz.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_2151 - Ben Muñoz.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_2182 - Ben Muñoz.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_3165.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_3166.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_3167.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_3180.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_3184.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_3188.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_3189 (1).JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_3189.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_3190.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4250.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4252.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4253.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4254.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4255.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4256.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4257.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4258.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4259.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4260.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4261.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4278.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4361.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_4382.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_5622.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_6364 - Andrew Murphie.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_6373 - Andrew Murphie.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_8881.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_8884.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_8889.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_8893.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_8895.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_8898.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_8905.JPG",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185150.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185202.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185234.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185317.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185355.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185506.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185559.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185602.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185614.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185807.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185843.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_185951.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_190030.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_190054.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_190226.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_190328.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_190333.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_190358.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_192208.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_192257.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_192312.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_192342.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190502_192401.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190509_141344.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190509_152750.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190519_183201.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190520_102629.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190526_182239.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190526_202839_234.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190526_202918.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190527_004830.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190527_212054.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190528_122403.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190602_163235.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190602_191209.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190602_191303.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190602_192703.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190602_212841.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190618_123258.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190618_123710.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190620_131103.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190702_095708.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190702_095722.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190723_140629.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190726_094704.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190726_094758 - André Fogliano.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190726_094758.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190806_143921 - halbe kuipers.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190811_172758.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190811_172803.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190812_112100.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190812_165042.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190815_185749939.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190815_185759262.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190815_185913322.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190815_190100098.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190815_190306079.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190815_190441777.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190815_190617865.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190815_190944343.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190819_165305.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190819_165419.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190819_165458.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190819_165626.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190819_165851.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190819_170103.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190820_132203 - sense lab.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190822_141916.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190822_142615.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190822_182425.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190823_144059 - halbe kuipers.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190823_144120.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190823_145114 - halbe kuipers.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190826_140326.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190826_140426.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190826_140505.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190826_141506.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190826_164547.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190826_173207.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190829_201640.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190829_201648.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190829_201659.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190901_195516 - halbe kuipers.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190902_110137.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190902_112840.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190902_115923_515.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190902_120212_027.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190902_125507_972.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190902_143727.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190902_143734.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190902_153904_166 - halbe kuipers.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190902_153904_166.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190902_170942.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/IMG_20190903_171016.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/midi.tiff",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/midi2.tiff",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/numbat2.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-04-30 at 12.44.42 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-05-09 at 11.28.31 PM (1).png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-05-10 at 10.10.03 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-07-16 at 9.56.57 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-07-24 at 6.49.49 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-07-24 at 6.50.38 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-07-24 at 6.51.56 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-07-24 at 6.52.24 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-07-24 at 6.52.30 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-07-24 at 6.54.14 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-07-24 at 6.54.39 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-07-24 at 7.11.14 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-07-25 at 12.27.20 AM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-10 at 3.44.46 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-16 at 12.52.12 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 3.36.07 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 3.36.41 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 3.37.05 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 3.39.30 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 3.42.43 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 3.47.25 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 3.50.18 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 3.55.47 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 3.56.56 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 3.57.44 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.13.38 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.14.36 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.16.49 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.18.24 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.20.01 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.23.59 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.25.17 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.25.59 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.26.31 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.27.55 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 4.29.05 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 9.28.54 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 9.29.39 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 9.32.09 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 9.34.06 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 9.36.40 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 9.39.18 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 10.24.26 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 10.25.08 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 10.49.12 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screen Shot 2019-08-17 at 10.49.41 PM.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/screen_shot_2019-08-17_at_9.28.29_pm.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screenshot 2019-05-05 at 14.48.46.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screenshot 2019-05-05 at 14.49.05.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screenshot 2019-09-01 20.46.28.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Screenshot 2019-09-16 at 08.27.22 - Christina MacRae.png",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/sense1.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/sense2.jpg",
"http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/Untitled.tiff",
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/quilt1.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/04.26.2019-3.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/quilt2.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/quilt3.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/quilt4.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/04.26.2019-1.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/04.26.2019-2.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/04.26.2019-4.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/2019-04-27-17.01.02.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/20190428_110327.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/20190428_142444.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/20190428_110802.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/20190428_110822.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/imagem.png',
'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/image1.png'
];

 pictures = ['thingies/beige.png',
              // loadImage('thingies/chairwbowl.png'),
              // loadImage('thingies/brownrck.png'),
              // loadImage('thingies/claybowl.png'),
              // loadImage('thingies/cephskin.png'),
              // loadImage('thingies/chairshark.png'),
              // loadImage('thingies/chairwbowl.png'),
              // loadImage('thingies/circlemetal.png'),
              // loadImage('thingies/claybowl.png'),
              // loadImage('thingies/compost.png'),
              // loadImage('thingies/pinkbowl.png'),
              // loadImage('thingies/corlarock.png'),
              // loadImage('thingies/drawerbox.png'),
              // loadImage('thingies/metaltape.png'),
              // loadImage('mmm/saopaulo/IMG_20190426_145135.png'),
              // loadImage('thingies/mirrortape.png'),
              // loadImage('thingies/onpic.png'),
              // loadImage('thingies/opurple.png'),
              // loadImage('thingies/pinkbowlsid.png'),
              // loadImage('images/artboard.svg'),
              'thingies/pinkpatch.png',
              'thingies/plantplastic.png',
              'thingies/polkaslink.png',
              'thingies/posterpatch.png',
              'thingies/posters.png',
              'thingies/prepillowcreature.png'
              // loadImage('images/img0.jpg'),
              // loadImage('mmm/saopaulo/imagem.png')
            ];
  // kitten = loadImage('images/img2.png');
  // thingie = loadImage('images/artboard.svg');

  // pictures = [loadImage('thingies/beige.png'),
  //           // loadImage('thingies/chairwbowl.png'),
  //           // loadImage('thingies/brownrck.png'),
  //           // loadImage('thingies/claybowl.png'),
  //           // loadImage('thingies/cephskin.png'),
  //           // loadImage('thingies/chairshark.png'),
  //           // loadImage('thingies/chairwbowl.png'),
  //           // loadImage('thingies/circlemetal.png'),
  //           // loadImage('thingies/claybowl.png'),
  //           // loadImage('thingies/compost.png'),
  //           // loadImage('thingies/pinkbowl.png'),
  //           // loadImage('thingies/corlarock.png'),
  //           // loadImage('thingies/drawerbox.png'),
  //           // loadImage('thingies/metaltape.png'),
  //           // loadImage('mmm/saopaulo/IMG_20190426_145135.png'),
  //           // loadImage('thingies/mirrortape.png'),
  //           // loadImage('thingies/onpic.png'),
  //           // loadImage('thingies/opurple.png'),
  //           // loadImage('thingies/pinkbowlsid.png'),
  //           // loadImage('images/artboard.svg'),
  //           loadImage('thingies/pinkpatch.png'),
  //           loadImage('thingies/plantplastic.png'),
  //           loadImage('thingies/polkaslink.png'),
  //           loadImage('thingies/posterpatch.png'),
  //           loadImage('thingies/posters.png'),
  //           loadImage('thingies/prepillowcreature.png')
  //           // loadImage('images/img0.jpg'),
  //           // loadImage('mmm/saopaulo/imagem.png')
  //         ];
  rand = loadImage(random(mimo));

  testt = loadImage("http://3e-pr0cess-s33dbank.com/mapz/mimoTraces/2019-08-31 13.59.52.jpg");
          picturesbrazil = [
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/quilt1.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/04.26.2019-3.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/quilt2.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/quilt3.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/quilt4.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/04.26.2019-1.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/04.26.2019-2.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/04.26.2019-4.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/2019-04-27-17.01.02.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/20190428_110327.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/20190428_142444.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/20190428_110802.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/20190428_110822.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/imagem.png',
            'http://3e-pr0cess-s33dbank.com/mapz/mmm/saopaulo/image1.png'
          ];

      rnd = loadImage(random(picturesbrazil));
      train = loadModel('models/agrisphere-stones-obj/agrisphere-stones.obj');
}

function setup() {
  fabb = createCanvas(windowWidth, windowHeight, WEBGL);
  fabb.parent('fabmap');
  camera(200, -100, ~150, 0, 0, 0, 0, 1, 0);
  console.log(rand);
  txtr = texture(rand);

}

function brazil() {
  txtr = texture(rnd);

}

function thingies() {
  preload();
  setup();
}

var tr;
function draw() {
  background(0, 0, 0, 0.2);
  orbitControl();
  noStroke();
  rotateY(frameCount * 0.01);


  for (let j = 0; j < 5; j++) {
   push();
   for (let i = 0; i < 2; i++) {
     translate(
       sin(frameCount * 0.02 + j) * 100,
       -cos(frameCount * 0.001 + j) * 100,
       sin(frameCount * 0.001 + j) * 100,
       i * 0.1
     );
     rotateZ(frameCount * 0.002);
  push();
  // translate(0,0,-4000);
  noStroke();
  scale(100);
  txtr;
  // texture(testt);
  model(train);
  pop();
  tr = 0;
  }
}
pop();

}
function mouseClicked() {
  const txtur = random(mimo);
  txtr = texture(loadImage(txtur));
  console.log(txtur);
}
