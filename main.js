canvas=document.getElementById("myCanvas");

ctx =canvas.getContext("2d");

car_width=90;
car_height=150;
//Give specific height and width to the car image



//Set initial position for a car image.
car_x = 10;
car_y = 350;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
function add() {
	background_imgTag = new Image();
	greencar_imgTag = new Image();

	background_imgTag.onload=uploadBackground;
	greencar_imgTag.onload=uploadgreencar;

	background_imgTag.src = background_image;
	greencar_imgTag.src = greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
	

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’
    ctx.drawImage(greencar_imgTag,car_x,car_y,car_width,car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}



function up(){
    if(car_y >=0){
       car_y = car_y - 10 ;
        console.log("When up arrow is clicked: X =" + car_x + " , " + " Y = " + car_y);
        uploadBackground();
       uploadgreencar();
    }
}
function down(){
    if(car_y <=500){
        car_y = car_y + 10 ;
        console.log("When down arrow is clicked: X =" + car_x + " , " + " Y = " + car_y);
		uploadBackground();
		uploadgreencar();
    }
}
function right(){
    if(car_x <=700){
        car_x = car_x + 10 ;
        console.log("When right arrow is clicked: X =" + car_x + " , " + " Y = " + car_y);
		uploadBackground();
		uploadgreencar();
    }
}
function left(){
    if(car_x >=0){
        car_x = car_x - 10 ;
        console.log("When left arrow is clicked: X =" +car_x + " , " + " Y = " + car_y);
		uploadBackground();
		uploadgreencar();
    }
}
