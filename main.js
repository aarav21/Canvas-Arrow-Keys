canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var backdrop = ["Mars1.jpg", "Mars2.jpg", "Mars3.jpg", "Mars4.jpg"]

var random = Math.floor(Math.random()*4);


background_image = backdrop[random];
rover_image = "rover.png";

rover_X = 1;
rover_Y = 200;

rover_height = 100;
rover_width = 150;

function add(){
    background_of_canvas = new Image();
    console.log(background_of_canvas);
    background_of_canvas.onload = uploadBackground();
    background_of_canvas.src  = background_image;

    rover = new Image();
    console.log(rover);
    rover.onload = uploadRover();
    rover.src = rover_image;
    
}

function uploadBackground(){
    ctx.drawImage(background_of_canvas, 0, 0, canvas.width, canvas.height);
    console.log("uploaded")
}

function uploadRover(){
    ctx.drawImage(rover, rover_X, rover_Y, rover_width, rover_height);
    console.log("uploaded")
}

window.addEventListener("keydown", key_press);

function key_press(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed == '37'){
        left();
    }

    if(keypressed == '38'){
        up();
    }

    if(keypressed == '39'){
        right();
    }

    if(keypressed == '40'){
        down();
    }
}

function left (){
    if(rover_X > 0 ){
        rover_X = rover_X - 10;
        uploadBackground();
        uploadRover();
    }
}

function up (){
    if(rover_Y > 0 ){
        rover_Y = rover_Y - 10;
        uploadBackground();
        uploadRover();
    }
}

function right (){
    if(rover_X < 650 ){
        rover_X = rover_X + 10;
        uploadBackground();
        uploadRover();
    }
}

function down (){
    if(rover_Y < 500 ){
        rover_Y = rover_Y + 10;
        uploadBackground();
        uploadRover();
    }
}