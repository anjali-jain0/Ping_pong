let dy1 = 0;
let y1 = 100;
let dy2 = 0;
let radius = 20;
let scr = 0;

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
c.width = window.innerWidth*0.50;
c.height = window.innerHeight*0.90;

window.addEventListener("keyup", function(event){
  if (event.keyCode == 38){
    if (x9 < c.width/2){
      dy1 = -100;
      y1 += dy1;
    } 
    else if (x9 >= c.width/2){
    dy2=-100;
    y2+=dy2;
    }
  }
  if (event.keyCode == 40){
    if(x9 < c.width/2){
      dy1 = 100;
      y1 += dy1;
    }
    else if(x9 >= c.width/2){
      dy2 = 100;
      y2 += dy2;
    }
	}
});

let y2 = 400, x2 = c.width-20;
let dx9 = 5, dy9 = 5;
let x9 = Math.random()*c.width;
let y9 = Math.random()*c.height;

animate();

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("SCORE: " + scr, 300, 30);
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(c.width/2, 0);
  ctx.lineTo(c.width/2, c.height);
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = "#ECF0F1";
  ctx.fillRect(0, y1, 20, 160);
  ctx.beginPath();
  ctx.fillStyle = "#ECF0F1";
  ctx.fillRect(x2, y2, 20, 160);
  ctx.beginPath();
  ctx.arc(x9, y9, radius, 0, 2*Math.PI);
  ctx.fillStyle = "#EC7063";
  ctx.fill();
  ctx.stroke();
  x9 += dx9;
  y9 += dy9;
  if (x9 + radius + 20>c.width){
    if (y9 + radius > y2 && y9 - radius < y2 + 160){
      dx9 = -dx9;
      if (x9 + radius >= c.width - 20)
        scr++;
    }
    else if (x9 > c.width - 20){
      gameOver();
    }
  }
  if (x9 - radius- 20 < 0){
  	if (y9 + radius > y1 && y9 - radius < y1 + 160){
  		dx9 = -dx9;
      if (x9 - radius <= 20)
        scr++;
  	  }
    else if (x9 <= 20)
      gameOver();
  }
   
  if (y9 + radius > c.height || y9 - radius < 0)
    dy9 = -dy9;

}

function gameOver(){
  document.getElementById('endBox').style.display = 'block';
  document.getElementById('gamePage').style.opacity = '0.05';
  document.getElementById('score').innerHTML = scr ; 
}