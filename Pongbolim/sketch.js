function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(color(0,100,0));
  mostraBolinha();
  desenhaCampo();
  movimentaBolinha();
  verificaColisaoBordas();
  mostraRaquete();
  mostraGol()
  movimentaRaquete1();
  movimentaRaquete2();
  verificaColisaoRaquete();
  incluiPlacar();
  marcarPontos();

 
  }




















  



