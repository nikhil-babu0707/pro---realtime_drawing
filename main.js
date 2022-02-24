function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    PoseNet = ml5.poseNet(video, modelloaded);
    PoseNet.on('pose', gotPoses);
}

function modelloaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('#969A97');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}