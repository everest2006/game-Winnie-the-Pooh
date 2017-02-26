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

setInterval(function () {


    if(i>6)
    {
        console.log(i);
        i=0;

   }
    else
    {
        console.log(i);
        draw(i);
        i+=1;

    }

},100);










function draw(k) {
    ctx.clearRect(50,100,57,60);

    ctx.drawImage(mas[k], 50, 100, 47, 58);






}
