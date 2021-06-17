var video
var song; 
function preload() {
  song = loadSound("file.mp3");
}
function setup() {
  
  
  createCanvas(400,300);
 video = createCapture(VIDEO)
  video.size(400,400)
  video.hide();
}

function draw() {
  background(0);
  image(video,0,0)
}