var mo,fo;
function setup() {
  createCanvas(800,400);
 fo= createSprite(400, 200, 50, 50);
 mo=createSprite(300,250,100,30);

 fo.shapeColor="green";
 mo.shapeColor="green";

}


function draw() {
  background(255,255,255); 

  mo.x=mouseX;
  mo.y=mouseY;

  if(mo.x-fo.x<=fo.width/2+mo.width/2 && fo.x-mo.x<=fo.width/2+mo.width/2 && mo.y-fo.y<=fo.height/2+mo.height/2 && fo.y-mo.y<=fo.height/2+mo.height/2 ){
    fo.shapeColor="red";
    mo.shapeColor="red";

  }
  else{
    fo.shapeColor="green";
     mo.shapeColor="green";

  }
  drawSprites();
}