noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,430);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#60bc5c');
    document.getElementById("square_side").innerHTML="Width and height of the square will be = "+difference+"px";
    fill("white");
    stroke("black");
    square(noseX, noseY, difference);
    
}
function modelLoaded(){
    console.log('Posenet is initialized');
}
function gotPoses(results){
    if(results.length>0)
    {console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX= "+noseX+"noseY= "+noseY);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    console.log("leftwristX= "+leftwristX+" rightwristX= "+rightwristX+" difference= "+ difference);
    }
}