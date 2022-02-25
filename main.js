let difference = 0;
let rightWristX = 0;
let leftWristX = 0;



function setup() {
    let video = createCapture(VIDEO);
    video.size(550, 500);

    let canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    let poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("left wrist x = " + leftWristX + "right wrist x = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    background('#f2fa0c');
    document.getElementById("font_size").innerHTML = "font size of the text is : " + difference + "px";
    textSize(difference);
    fill('#fa0c0c');
    text("Hi, I am Nikhil Babu", 50, 400);
}