var canvas;
var ctx;
var FPS = 50;

var anchoF = 50;
var altoF = 50;

var muro = '#000000';
var tierra = '#950F4C';

var protagonista 

var escenario = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,2,2,2,0,0,0,0,0,2,2,2,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,0,0,2,0],
    [0,2,2,2,2,2,2,0,2,2,2,0,0,2,0],
    [0,2,2,2,2,2,0,0,0,2,2,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
  
  function dibujaEscenario(){
    var color;
  
    for(y=0;y<10;y++){
      for(x=0;x<15;x++){
  
        if(escenario[y][x]==0)
          color = muro;
  
        if(escenario[y][x]==2)
          color = tierra;
  
        ctx.fillStyle = color;
        ctx.fillRect(x*anchoF,y*altoF,anchoF,altoF);
      }
    }
  
  
  }
  

var jugador  = function(){
this.x = 350;
this.y = 300;

this.vx=0;
this.vy=0;

this.gravedad = 0.5;
this.friccion = 0.4 ;

this.salto =10;
this.velocidad = 3;
this.velocidadMax = 5;

this.suelo= false;

this.pulsaIzquierda = false;
this.pulsaDerecha = false;



this.colision = function(x,y){
  var colisiona = false 

  if (escenario[parseInt(y/altoF)][parseInt(x/anchoF)]==0){
    colisiona = true
  }
return colisiona;
}

this.correccion = function (lugar){
  //abajo 
  if(lugar == 1){
    this.y =parseInt (this.y/altoF)*altoF;
//arriba
 }

if(lugar == 2){
  this.y =parseInt((this.y/altoF)+1)* altoF;
  }

//izquierda    
if(lugar == 3){
    this.x = parseInt(this.x/anchoF)*anchoF; 
}
//derecha 
if(lugar == 4){
  this.x = parseInt((this.x/anchoF)+1)*anchoF; 
}

}

this.fisica = function(){  
  //grabedad 
  if (this.suelo == false ){
    this.vy  += this.gravedad;
  }

//Iquierda 
if (this.pulsaDerecha == true && this.vx <= this.velocidadMax){
  this.vx += this.velocidad;
}

//Derecha 
if (this.pulsaIzquierda == true && this.vx >= 0-(this.velocidadMax)){
  this.vx -= this.velocidad;
}
//FRICCION

//derecha 
if (this.vx  >0);{
this.vx -= this.friccion;
 
  
}

//izquierda 
if (this.vx <0){
this.vx += this.friccion;

if (this.vx>0){
  this.vx = 0;
}

//derecha 
if (this.vx > 0){
    if ((this.colision(this.x + anchoF + this.vx , this.y +1)== true) || (this.colision(this.x + anchoF + this.vx , this.y + altoF -1)== true)){
      this.vx = 0;
        }
}


}
//techo 
if(this.vy <0){
  if((this.colision(this.x , this.y)==true) || (this.colision(this.x + anchoF , this.y)==true) ){
      this.suelo = true;
      this.vy = 0;
      this.correccion(2);
}
}

//suelo     
if(this.vy >=0){
  if((this.colision(this.x , this.y +  altoF)==true) || (this.colision(this.x + anchoF , this.y +  altoF)==true) ){
      this.suelo = true;
      this.vy = 0;
      this.correccion(1);

    }
else{
  this.suelo =false;
}
}

  

  //valore 
  this.y += this.vy;
  this.x += this.vx;  
}





this.arriba = function(){

  if(this.suelo == false){
    this.vy -= this.salto;
    this.suelo = true;
  }
}



this.izquierda = function () {
this.pulsaIzquierda = true
}
this.derecha = function () {
  this.pulsaDerecha = true;
}
this.sueltaIzquierda = function () {
  this.pulsaIzquierda = false
}
this.sueltaDerecha = function () {
  this.pulsaDerecha = false ;
}

this.dibuja = function(){
this.fisica()

  ctx.fillStyle ="#7B0520" ;
  ctx.fillRect(this.x , this.y ,anchoF ,altoF );
}

}


this.creaBloque = function(x,y){
var yBloque = parseInt(y/anchoF)
var xBloque = parseInt(x/altoF)

var colorBloque = escenario[yBloque][xBloque];

if(colorBloque == 0){
  colorBloque =  2; 
}
else{
colorBloque=0;
}
escenario[yBloque][xBloque] = colorBloque
}


this.dibujaBloque = function(x,y) {   
  
  ctx.fillStyle = '#777777';
  ctx.fillRect(parseInt(x/anchoF)*anchoF,parseInt(y/altoF)*altoF,anchoF,altoF);
}



function clickRaton(objeto){
console.log('aprita')
}


function sueltaRaton(objeto){
  creaBloque(ratonX,ratonY)
console.log('suelta ')
}


function posicionRaton(objeto){
ratonX = objeto.pageX;
ratonY = objeto.pageY;
console.log(ratonY  + " - " + ratonX)
}







var ratonX = 0
var ratonY = 0
 


  function inicializa(){ 

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    
   protagonista = new jugador;

canvas.addEventListener('mousedown', clickRaton,false);
canvas.addEventListener('mouseup', sueltaRaton,false);
canvas.addEventListener('mousemove', posicionRaton,false);




   document.addEventListener('keydown',function(tecla){

    if(tecla.keyCode == 32){
      protagonista.arriba();
    }

    if(tecla.keyCode == 37){
      protagonista.izquierda();
    }

    if(tecla.keyCode == 39){
      protagonista.derecha();
    }

  });

  document.addEventListener('keyup',function(tecla){

    if(tecla.keyCode == 37){
      protagonista.sueltaIzquierda();
    }

    if(tecla.keyCode == 39){
      protagonista.sueltaDerecha();
    }

  });

    setInterval(function(){
        principal();
      },1000/FPS);
 
    

    function borraCanvas(){
        canvas.width=750;
        canvas.height=500;
      }


      function principal(){
        borraCanvas();
        dibujaEscenario();

        protagonista.dibuja()
     
      }
    
    
  }
