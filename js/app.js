/**
 * 
 */

 function initAnimation(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var imagePath = ('./sample.jpg');
    var image = new Image();
    image.src = imagePath;

    canvas.width = Number(window.innerWidth);
    canvas.height = Number(canvas.width/2);
    image.onload = function(){
          ctx.drawImage(image,0,0,image.width,image.height,0,0,canvas.width,canvas.height);
    }
}
