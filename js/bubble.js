class Bubble {
 constructor(array, x, y, z, texture) {
   this.x = x;
   this.y = y;
   this.z = z;
   this.array = array;
   this.texture = loadImage(random(this.array));
 }
  newTex(){
    this.texture = loadImage(random(this.array));
  }
 show() {
   texture(this.texture);
   this.bx = box(this.x, this.y, this.z);
 }

 plan() {
   fill('red');
   texture(this.texture);
   this.pln = plane(this.x, this.y);
 }

 huge(){
   texture(this.texture);
   this.bx = box(this.x*4, this.y*3, this.z*4);
 }
}
