noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('Untitledqwertyuiopasdfghjklzxcvbnm.png');
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO) ;
    video.size(600, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);

    image(clown_nose, noseX, noseY, 250, 150);
    
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-23;
        noseY = results[0].pose.nose.y-23;
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
    }
}
function take_snapshot(){
    save('myFilterimage.png');
}



