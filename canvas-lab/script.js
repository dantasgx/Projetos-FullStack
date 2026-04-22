 let retangulo1 = {
      x: 0,
      y: 0,
      w: 70,
      h: 70,
      color: "blue"
    };

    let retangulo2 = {
      x: 430,
      y: 0,
      w: 70,
      h: 70,
      color: "red"
    };

    let retangulo3 = {
      x: 0,
      y: 455,
      w: 45,
      h: 45,
      color: "yellow"
    };

    let retangulo4 = {
      x: 45,
      y: 455,
      w: 45,
      h: 45,
      color: "yellow"
    };

    let retangulo5 = {
      x: 0,
      y: 410,
      w: 45,
      h: 45,
      color: "yellow"
    };

    let retangulo6 = {
      x: 455,
      y: 455,
      w: 45,
      h: 45,
      color: "black"
    };

    let retangulo7 = {
      x: 410,
      y: 455,
      w: 45,
      h: 45,
      color: "black"
    };

    let retangulo8 = {
      x: 455,
      y: 410,
      w: 45,
      h: 45,
      color: "black"
    };

    let retangulo9 = {
      x: 0,
      y: 180,
      w: 45,
      h: 45,
      color: "aqua"
    };

    let retangulo10 = {
      x: 0,
      y: 225,
      w: 45,
      h: 45,
      color: "aqua"
    };

    let retangulo11 = {
      x: 455,
      y: 200,
      w: 45,
      h: 45,
      color: "aqua"
    };
    let retangulo12 = {
      x: 170,
      y: 225,
      w: 55,
      h: 55,
      color: "red"
    };

    let linha1 = {
      x1: 0,
      y1: 225,
      x2: 500,
      y2: 225,
      color: "green"
    };

    let linha2 = {
      x1: 225,
      y1: 225,
      x2: 225,
      y2: 500,
      color: "green"
    };

    let linha3 = {
      x1: 0,
      y1: 0,
      x2: 225,
      y2: 225,
      color: "blue"
    };

    let linha4 = {
      x1: 520,
      y1: 0,
      x2: 225,
      y2: 225,
      color: "red"
    };



    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    function desenha_linha(lin) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = lin.color;
      ctx.moveTo(lin.x1, lin.y1);
      ctx.lineTo(lin.x2, lin.y2);
      ctx.stroke();
      ctx.closePath();
    }

    function desenha_retangulo(ret) {
      ctx.beginPath();
      ctx.fillStyle = ret.color;
      ctx.fillRect(ret.x, ret.y, ret.w, ret.h);
      ctx.closePath();
    }

    function desenha_circulo(circ) {
    ctx.beginPath();
    ctx.arc(
        circ.x,
        circ.y,
        circ.r,
        circ.inicio ?? 0,
        circ.fim ?? Math.PI * 2
    );

    // preenchimento
    if (circ.color) {
        ctx.fillStyle = circ.color;
        ctx.fill();
    }


    // borda
    ctx.lineWidth = circ.bordaLargura;
    ctx.strokeStyle = circ.bordaCor;
    ctx.stroke();

    ctx.closePath();
    }

    let circulo1 = {
        x: 225,
        y: 160,
        r: 22,
        color: "aqua",
        bordaCor: "blue",
        bordaLargura: 2
    };

    let circulo2 = {
        x: 225,
        y: 500,
        r: 60,
        color: "aqua",
        bordaCor: "green",
        bordaLargura: 2
    };

    let circulo3 = {
        x: 225,
        y: 500,
        r: 90,
        inicio: -Math.PI /2,
        fim: Math.PI/2,
        bordaCor: "green",
        bordaLargura: 2
    };

    let circulo4 = {
        x: 225,
        y: 500,
        r: 110,
        inicio: Math.PI ,
        fim: Math.PI*1.5,
        bordaCor: "green",
        bordaLargura: 2
    };

    let circulo5 = {
        x: 225,
        y: 225,
        r: 110,
        inicio: Math.PI,
        fim: Math.PI*2,
        bordaCor: "green",
        bordaLargura: 2
    };

    let circulo6 = {
        x: 120,
        y: 340,
        r: 22,
        color: "yellow",
        bordaCor: "green",
        bordaLargura: 2
    };

    let circulo7 = {
        x: 350,
        y: 340,
        r: 22,
        color: "yellow",
        bordaCor: "green",
        bordaLargura: 2
    };

    function desenhar() {
      ctx.clearRect(0, 0, 500, 500);

        desenha_retangulo(retangulo1);
        desenha_retangulo(retangulo2);
        desenha_retangulo(retangulo3);
        desenha_retangulo(retangulo4);
        desenha_retangulo(retangulo5);
        desenha_retangulo(retangulo6);
        desenha_retangulo(retangulo7);
        desenha_retangulo(retangulo8);
        desenha_retangulo(retangulo9)
        desenha_retangulo(retangulo10)
        desenha_retangulo(retangulo11)
        desenha_retangulo(retangulo12)
        desenha_linha(linha1);
        desenha_linha(linha2)
        desenha_linha(linha3)
        desenha_linha(linha4)
        desenha_circulo(circulo1);
        desenha_circulo(circulo2);
        desenha_circulo(circulo3);
        desenha_circulo(circulo4);
        desenha_circulo(circulo5);
        desenha_circulo(circulo6);
        desenha_circulo(circulo7)

      requestAnimationFrame(desenhar);
    }

    desenhar();