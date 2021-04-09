noseX = 0;
noseY = 0;
l_wristX = 0;
r_wristX = 0;
size = 0;
content = "";

function preload() {}

function setup() {
    // Canvas
    canvas = createCanvas(500, 300);
    canvas.position(520, 250);
    // Webcam
    webcam = createCapture(VIDEO);
    webcam.size(375, 500);
    webcam.position(30, 150);
    // Pose-Net
    poseNet = ml5.poseNet(webcam, modelLoaded);
    poseNet.on('pose', gotposes);
}
function modelLoaded() {
    console.log("Pose Net Is Ready");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        l_wristX = results[0].pose.leftWrist.x;
        r_wristX = results[0].pose.rightWrist.x;
        size = floor(l_wristX - r_wristX);
    }
}

function draw() {
    background('#b4fac8');
    text(content, noseX, noseY);
    textSize(size);
    fill('#3d4e63');
}

function change() {
    content = document.getElementById("input").value;
    document.getElementById("input").innerHTML = "";
}