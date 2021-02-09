objects = [];
status = "";


function setup() {
  canvas = createCanvas(380, 275);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,275);
  video.hide();
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  object_name = document.getElementById("object_name").value;
}
function draw() {
    image(video, 0, 0, 380, 275);
}
email1 = localStorage.getItem("email1");
document.getElementById("user_name").innerHTML= "<h1>Welcome "+email1+"!</h1>";