//Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//Variaveis da Velocidade da Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;


function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro) ;
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBordas(){
  if(!(yBolinha> yGol && yBolinha < yGol+hGol)){
  if (xBolinha  > width- raio || xBolinha < 0+ raio ){
    velocidadeXBolinha *= -1;
  }
  }
  if (yBolinha  > height- raio || yBolinha < 0+raio){
    velocidadeYBolinha *= -1;
  }
}









