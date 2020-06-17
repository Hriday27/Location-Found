//circle variables
var x = 200;
var y = 200;
var radius = 50;

//argb colors
var r = 255;
var tickspeed = 5;

//check faded in or not
var faded = false;

function setup(){
 createCanvas(400,400); 
}

function draw(){
 background(0); 
  
  //draw circle
  fill(r, 0,0, 255);
  noStroke();
  ellipse(x, y, radius, radius);
  
  //fade in out the circle
  if(faded == false){
   r-= tickspeed;
    if(r == 0){
    faded = true;
    }
  }
  if(faded){
   r+=tickspeed;
    if(r == 255){
      faded = false;
    }
  }
  
  //draw lines and text
  stroke(255);
  line(x,y,x+50, y-50);
  line(x+50, y-50, x+100, y-50);
  noStroke();
  fill(255);
  text('Location Found', x+110, y-50)
}
