function preload(){
}
function setup(){
    canvas= createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,300,220,150,120);
    
    fill(53, 57, 64);
    stroke(0, 0, 0);
    rect(600,150,20,250);
      
    fill(53, 57, 64);
    stroke(0, 0, 0);
    rect(150,150,20,250);
      
    fill(53, 57, 64);
    stroke(0, 0, 0);
    rect(150,150,450,20);
      
    fill(53, 57, 64);
    stroke(0, 0, 0);
    rect(150,400,450,20);
      
    fill(0,300, 500);
    stroke(128, 0, 0);
    ellipse(160, 160, 55, 55);
      
    fill(0,300,500);
    stroke(128, 0, 0);
    ellipse(610, 160, 55, 55);
    
    fill(0,300,500);
    stroke(128, 0, 0);
    ellipse(610, 410, 55, 55);
      
    fill(0,300,500);
    stroke(128, 0, 0);
    ellipse(160, 410, 55, 55);
    
}
