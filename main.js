noseX=0;
noseY=0;
function preload() {
    clown_nose = loadImage('https://th.bing.com/th/id/R.37c4101a4dd6be0eacfadbf4dfdeb962?rik=KxAQSJmVQ4n7bw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fmoustache-transparent-background%2fmoustache-transparent-background-2.png&ehk=YOMTZUmcSSnBmR3lprQ17GPb3Dx27tlu8WJgR7p%2b2X4%3d&risl=&pid=ImgRaw&r=0');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}