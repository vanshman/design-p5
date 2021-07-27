function preload(){
    
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 160, 120, 320, 240);
    fill(255, 255, 0);
    rect(70,20,20,600);

    fill(255, 255, 0);
    rect(550,20,20,600);

    fill(255, 255, 0);
    rect(20,50,600,20);



    fill(0, 255, 0);
    circle(80,60,100);

    fill(0, 255, 0);
    circle(320,60,100);

    fill(0, 255, 0);
    circle(560,60,100);



    fill(255, 255, 0);
    rect(20,440,600,20);



    fill(0, 255, 0);
    circle(80,440,100);

    fill(0, 255, 0);
    circle(320,440,100);

    fill(0, 255, 0);
    circle(560,440,100);



    fill(0, 255, 0);
    circle(80,240,100);

    fill(0, 255, 0);
    circle(560,240,100);
}
function take_snapshot(){
    save("img");
}