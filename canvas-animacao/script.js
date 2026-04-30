
let retangulo1 = {
    x: 10,
    y: 10,
    w: 50,
    h: 50,
    color: "red"
};

var retangulo2 = {
    x:100,
    y: 100,
    w: 50,
    h: 50,
    color: "blue"
};

let retangulo3 = {
    x:200,
    y:200,
    w: 50,
    h: 50,
    color: "green"
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")

img = new Image()
img.src = "img/mao.webp"

let imgX = 200;
let imgY = 200;

let imgW = 75;
let imgH = 75;

function desenha_retangulo(ret){
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = ret.color;
    ctx.fillRect(ret.x,ret.y,ret.w,ret.h);
    ctx.closePath();
};

function desenha_bola(){
    ctx.beginPath()
    ctx.drawImage(img, imgX, imgY, imgW, imgH)
    ctx.closePath();
}


let mov = 1
function desenhar (){
    ctx.clearRect(0,0,500,500)

    if(retangulo1.x == 500-retangulo1.w){
        mov = -1
    }
    if (retangulo1.x == 0){
        mov = 1
    }
    retangulo1.x = retangulo1.x + mov

    desenha_retangulo(retangulo1)
    desenha_retangulo(retangulo2)
    desenha_retangulo(retangulo3)
    desenha_bola()
    requestAnimationFrame(desenhar)
}

desenhar()

document.addEventListener("keydown", function(evento){
    tecla = evento.key;
    console.log(tecla);

    var vel = 20;

    if (tecla == "ArrowUp") {
        retangulo2.y -= vel;
    }
     if (tecla == "ArrowDown") {
        retangulo2.y += vel;
    }
     if (tecla == "ArrowLeft") {
        retangulo2.x -= vel;
    }
     if (tecla == "ArrowRight") {
        retangulo2.x += vel;
    }
})

document.addEventListener ("mousemove", function(evento){
    var rect = canvas.getBoundingClientRect();
    var x_mouse = evento.clientX - rect.left;
    var y_mouse = evento.clientY - rect.top;
    
    console.log(x_mouse, y_mouse);

    imgX = x_mouse - imgW / 2;
    imgY = y_mouse - imgH / 2;

    if (imgX<0) imgX = 0;
    if (imgY < 0) imgY = 0;
    if (imgX + imgW > canvas.width) imgX = canvas.width - imgW;
    if (imgY + imgH > canvas.height) imgY = canvas.height - imgH;
})