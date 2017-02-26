//window.onload = init;
var canvas;
var ctx;
var mas = [];


    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');



    var bear1 = new Image();
    bear1.src = "images/step1.png";
    var bear2 = new Image();
    bear2.src = "images/step2.png";
    var bear3 = new Image();
    bear3.src = "images/step3.png";
    var bear4 = new Image();
    bear4.src = "images/step4.png";
    var bear5 = new Image();
    bear5.src = "images/step5.png";
    var bear6 = new Image();
    bear6.src = "images/step6.png";
    var bear7 = new Image();
    bear7.src = "images/step7.png";

    mas[0] = bear1;
    mas[1] = bear2;
    mas[2] = bear3;
    mas[3] = bear4;
    mas[4] = bear5;
    mas[5] = bear6;
    mas[6] = bear7;
var i = 0;
var spped = 10;
var x =50;
var y = 100;

var isLeft = false;
var isRight = false;
var isUp = false;
var isDown = false;

setInterval(function () {

    document.addEventListener("keydown",checkkeyDown,false);
    document.addEventListener("keyup",checkkeyUp,false);

    if(i>6)
    {
        //console.log(i);
        i=0;

   }
    else
    {
        move();

        draw(i,5);
        i+=1;

    }

},100);


function checkkeyDown(e) {
    var keyID = e.key.Code || e.which;
    //console.log(keyID);
    var keyChar = String.fromCharCode(keyID);
    console.log(keyChar);

    if(keyChar == "%") //left
    {
        isLeft = true;
        e.preventDefault();
    }
    if(keyChar == "'") //right
    {
        isRight = true;
        e.preventDefault();
    }
    if(keyChar == "&") //up
    {
        isUp = true;
        e.preventDefault();
    }
    if(keyChar == "(") //down
    {
        isDown = true;
        e.preventDefault();
    }
}
function checkkeyUp(e) {
    var keyID = e.key.Code || e.which;
    //console.log(keyID);
    var keyChar = String.fromCharCode(keyID);
    console.log(keyChar);

    if(keyChar == "%") //left
    {
        isLeft = false;
        e.preventDefault();
    }
    if(keyChar == "'") //right
    {
        isRight = false;
        e.preventDefault();
    }
    if(keyChar == "&") //up
    {
        isUp = false;
        e.preventDefault();
    }
    if(keyChar == "(") //down
    {
        isDown = false;
        e.preventDefault();
    }
}

function move() {
    if(isLeft) x-=spped;
    if(isRight) x+=spped;
    if(isUp) y-=spped;
    if(isDown) y+=spped;
}







function draw(k) {
   // x+=spped;
    ctx.clearRect(0,0,500,500);

    ctx.drawImage(mas[k], x, y, 47, 58);






}
