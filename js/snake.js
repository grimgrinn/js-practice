window.onload = function(){
    console.log('jhi1111');
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
};
playerX = playerY = 10;
greedSize = tailCount = 20;
appleX = appleY = 15;
xVelocity = yVelocity= 0;
trail = [];
tail = 5;

function game(){
  playerX+=xVelocity;
  playerY+=yVelocity;
    if(playerX<0){
      playerX = tailCount-1;
    }
    if(playerX>tailCount-1){
      playerX = 0;
    }
    if(playerY<0){
      playerY = tailCount-1;
    }
    if(playerY>tailCount-1){
      playerY=0;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canv.width,canv.height);

    ctx.fillStyle="lime";
    for(var i=0; i < trail.length;++i){
        ctx.fillRect(trail[i].x * greedSize,trail[i].y*greedSize,greedSize-2,greedSize-2);
        if(trail[i].x==playerX && trail[i].y==playerY){
            tail = 5;
        }
    }
    trail.push({x:playerX, y:playerY});
    while(trail.length>tail){
        trail.shift();
    }

    if(appleX==playerX && appleY==playerY){
        tail++;
      appleX=Math.floor(Math.random()*tailCount);
      appleY=Math.floor(Math.random()*tailCount);
    }
    ctx.fillStyle="red";
    ctx.fillRect(appleX*greedSize,appleY*greedSize,greedSize-2,greedSize-2);
}

function keyPush(evt){
  switch(evt.keyCode){
    case 37:
      xVelocity=-1;yVelocity=0;
      break;
    case 38:
      xVelocity=0;yVelocity=-1;
      break;
    case 39:
      xVelocity=1;yVelocity=0;
      break;
    case 40:
      xVelocity=0;yVelocity=1;
      break;
  }
}