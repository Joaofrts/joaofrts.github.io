function desenhaCampo(){
  linhasLaterais();
  linhaDeFundo();
  marcacoesCentrais();
  AreaDoGol();
  meiaLuaDoGol();
  pequenaAreaGol();
  marcaPenalti();
  escanteios();
}
function marcacoesCentrais(){
  rect(299.5,0,1,400)
  circle(300,200,10)
  noFill()
  circle(300,200,150)
  
}

function linhasLaterais(){
  rect(0,0,600,1)
  rect(0,399,600,1)
}
function linhaDeFundo(){
  rect(0,0,1,400)
  rect(599,0,1,400)
}

function AreaDoGol(){
  noFill();
  beginShape();
  vertex(0,80);
  vertex(120,80);
  vertex(120,320);
  vertex(0,320);
  endShape();
  beginShape();
  vertex(600,80);
  vertex(480,80);
  vertex(480,320);
  vertex(600,320);
  endShape();
}

function meiaLuaDoGol(){
  noFill()
  arc(120,200,90,110,-1.5708,1.5708)
  arc(480,200,90,110,1.5708,-1.5708)
}

function pequenaAreaGol(){
  noFill();
  beginShape();
  vertex(0,130);
  vertex(60,130);
  vertex(60,270);
  vertex(0,270);
  endShape();
  beginShape();
  vertex(600,130);
  vertex(540,130);
  vertex(540,270);
  vertex(600,270);
  endShape();
}

function marcaPenalti(){
  fill(255)
  circle(80,200,5)
  circle(520,200,5)
}

function escanteios(){
  noFill()
  arc(2,2,25,25,0,PI/2)
  arc(2,398,25,25,3*PI/2,2*PI)
  arc(598,2,25,25,PI/2,PI)
  arc(598,398,25,25,-PI,-PI/2)
}











