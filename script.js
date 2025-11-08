//SETTING UP CANVAS
const canvas = document.getElementById(
  "canvas");
const ctx = canvas.getContext("2d");  

//SET CANVAS TO SPAN WINDOW
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;


// -----------PUMPKIN BODY-----------
//STEM BROWN
ctx.beginPath();
ctx.moveTo(350, 300);
ctx.lineTo(350, 75);
ctx.lineTo(300, 60);
ctx.lineTo(250, 60);
ctx.lineTo(270, 90);
ctx.lineTo(300, 90);
ctx.lineTo(325, 100);
ctx.lineTo(335, 130);
ctx.lineTo(320, 150);
ctx.closePath();
ctx.fillStyle = "#543126";
ctx.fill();

ctx.beginPath();
ctx.moveTo(250, 60);
ctx.lineTo(230, 95);
ctx.lineTo(270, 90);
ctx.closePath();
ctx.fillStyle = "brown";
ctx.fill();

ctx.beginPath();
ctx.moveTo(300, 90);
ctx.lineTo(315, 105);
ctx.lineTo(320, 125);
ctx.lineTo(310, 135);
ctx.lineTo(320, 150);
ctx.lineTo(335, 130);
ctx.lineTo(325, 100);
ctx.closePath();
ctx.fillStyle = "brown";
ctx.fill();


//FLESH, center
ctx.beginPath();
ctx.ellipse(300, 290, 85, 160, 0, 0, Math.PI * 2);
ctx.fillStyle = "orange";
ctx.fill();

//left
ctx.beginPath();
ctx.ellipse(240, 300, 80, 140, 0, 0, Math.PI * 2);
ctx.fillStyle = "orange";
ctx.fill();

//right
ctx.beginPath();
ctx.ellipse(360, 300, 80, 140, 0, 0, Math.PI * 2);
ctx.fillStyle = "orange";
ctx.fill();

//far left
ctx.beginPath();
ctx.ellipse(190, 310, 50, 120, 0, 0, Math.PI * 2);
ctx.fillStyle = "orange";
ctx.fill();

//far right
ctx.beginPath();
ctx.ellipse(410, 310, 50, 120, 0, 0, Math.PI * 2);
ctx.fillStyle = "orange";
ctx.fill();

//----SHADING
//Left1
ctx.beginPath();
ctx.ellipse(250, 300, 100, 10, Math.PI * -1.5, 0, Math.PI);
ctx.fillStyle = "#D47024";
ctx.fill();

//right
ctx.beginPath();
ctx.ellipse(350, 300, 100, 10, Math.PI * 1.5, 0, Math.PI);
ctx.fillStyle = "#D47024";
ctx.fill();

//farleft
ctx.beginPath();
ctx.ellipse(190, 320, 80, 7, Math.PI * -1.5, 0, Math.PI);
ctx.fillStyle = "#D47024";
ctx.fill();

//farright
ctx.beginPath();
ctx.ellipse(410, 320, 80, 7, Math.PI * 1.5, 0, Math.PI);
ctx.fillStyle = "#D47024";
ctx.fill();

//------FACE
//LeftEye
ctx.beginPath();
ctx.moveTo(230, 230);
ctx.lineTo(200, 270);
ctx.lineTo(270, 290);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();

//ref 300,290
//RightEye
ctx.beginPath();
ctx.moveTo(370, 230);
ctx.lineTo(400, 270);
ctx.lineTo(330, 290);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();

//Mouth
ctx.beginPath();
ctx.ellipse(300, 400, 90, 100, Math.PI, 0, Math.PI);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.rect(262, 295, 30, 30);
ctx.fillStyle = "orange";
ctx.fill();

ctx.beginPath();
ctx.rect(315, 295, 30, 30);
ctx.fill();

ctx.beginPath();
ctx.rect(290, 370, 50, 30);
ctx.fill();