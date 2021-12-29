//Variaveis gerais da Raquete
let hRaquete = 60;
let wRaquete = 10;
let xRaquete =[100,370,222,492]
let yRaquete = [170,170,170,170]

//Variaveis dos Gols
let hGol = 80;
let wGol = 2;
let xGol = [3,595]
let yGol = [160,160]

let colidiu = [false,false,false,false]


//Variaveis de pontuação
let meusPontos= 0;
let pontosOponente = 0;



function mostraRaquete(){
  for (let i = 0; i < xRaquete.length; i++){
  if(i< 2){
    noStroke()
    fill(color(0,0,205))
    rect(xRaquete[i], yRaquete[i],wRaquete,hRaquete);
    
    }else{
      fill(color(255,0,0))
      rect(xRaquete[i], yRaquete[i],wRaquete,hRaquete);
      fill(255)
    }
  }
}

function mostraGol(){
  for (let i = 0; i < xGol.length; i++){
    rect(xGol[i],yGol[i],wGol,hGol)
  }
}

function movimentaRaquete1(){
  if(yRaquete[0] > 0){
  if (keyIsDown(UP_ARROW)){
    yRaquete[0] -= 10
    yRaquete[1] -= 10
  }
  }
  if(yRaquete[0] + hRaquete<height){
  if (keyIsDown(DOWN_ARROW)){
    yRaquete[0] += 10
    yRaquete[1] += 10
  }
  }
}

function movimentaRaquete2(){
  if(yRaquete[2] > 0){
  if (keyIsDown(87)){
    yRaquete[2] -= 10
    yRaquete[3] -= 10
  }
  }
  if(yRaquete[2] + hRaquete<height){
  if (keyIsDown(83)){
    yRaquete[2] += 10
    yRaquete[3] += 10
  }
  }
}
     

function verificaColisaoRaquete2(){
  if (xBolinha - raio < xRaquete + wRaquete && yBolinha - raio < yMinhaRaquete + hRaquete && yBolinha+ raio > yMinhaRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play()
  }
}

function verificaColisaoRaquete(){
  for (let i = 0; i < xRaquete.length; i++){
  colidiu[i] = collideRectCircle(xRaquete[i], yRaquete[i] , wRaquete, hRaquete, xBolinha, yBolinha, raio);}
  colisao();
    
  
  
}

function colisao(){
  for(let i = 0; i< colidiu.length; i++){
  if (colidiu[i]){
    velocidadeXBolinha *= -1;
    raquetada.play()
  }
  }
}

function marcarPontos(){
  if (xBolinha - raio <= 1 && yBolinha > yGol[0] && yBolinha  < yGol[0] + hGol){
    setTimeout( reiniciaJogo(), 5*1000)
    pontosOponente += 1
    ponto.play()
    
  }
  if (xBolinha + raio >= 599 && yBolinha > yGol[1] && yBolinha < yGol[1] + hGol){
    setTimeout( reiniciaJogo(), 5*1000)
    meusPontos += 1
    ponto.play()
    
  }
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(130,10,40,20);
  fill(255);
  text(meusPontos,150,26 );
  fill(color(255,140,0));
  rect(430,10,40,20);
  fill(255);
  text(pontosOponente,450,26);
}

function reiniciaJogo(){
  xBolinha = 300;
  yBolinha = 200
}

function limitaRaquete(){
  for (let i = 0; i < yRaquete.length; i++){
    if(yRaquete[i] +hRaquete>= height || yRaquete [i] <= 0 ){
      
    }
  }
}




