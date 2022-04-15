Status = "";
input_text = "";

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(600,300);
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}
function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input_id").value;
}
function modelLoaded(){
    console.log("Model is loaded!");
    Status = true;
}
function draw(){
    image(video,0,0,400,400);
}
