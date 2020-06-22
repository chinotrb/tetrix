var canvas;
var ctx;
var FPS = 50;

var anchoF = 50;
var altoF = 50;

var gamer 

var muro = '#000000';
var tierra = '#950F4C';

var escenario = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,2,2,2,0,0,0,0,0,2,2,2,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,2,0,0,2,2,2,2,2,0,0,2,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,0,2,2,2,2,0,0,2,2,2,0,0,0],
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
  

var player  = function(){
    this.x = 100;
    this.y = 100;

this.vx=0;
this.vy=0;

this.gravedad = 0.5;
this.friccion = 0.1 ;

this.salto =10;
this.velocidad = 3;

this.suelo= 0;

this.pulDerecha = false;
this.pulIzquierda = false;
 
this.colicion = function(x,y){
var coliciona = false 

if (escenario[parseInt(y/altoF)][parseInt(x/altoF)] == 0){
coliciona= true
}
return(coliciona)
}

this.fisica = function(){

    //gravedad
if (this.suelo == false);{
this.vy += this.gravedad;
}

//horizontal 
if (this.pulDerecha == true){
this.vx += this.velocidad ; 
}

if (this.pulIzquierda == true ){
this.vy -= this.velocidad
}

//friccion
if(this.vs > 0){
    this.vx -= this.friccion
}

if(this.vs <0){
    this.vx += this.friccion
}




if(this.vy > 0){
    if (this.colicion(this.x,this.y + altoF)== true){
        this.suelo = true
        this.vy = 0; 
    }
}

//valores 
this.y += this.vy;
this.x += this.xy;
}

this.arriba = function(){
    if(this.suelo = true){
        this.vy -= this.salto;
        this.suelo = false;

    }
}
this.izquierda = function(){
    this.pulIzquierda = true;
  }     

  this.derecha = function(){
    this.pulDerecha = true;
  }


  this.sueltaizquierda = function(){
    this.pulIzquierda = false;
  }

  this.sueltaderecha = function(){
    this.pulDerecha = false;
  }

this.dibuja  = function(){

this.fisica();

ctx.fillStyle = '#398306 ';
ctx.fillRect(this.x,this.y,anchoF,altoF);
}






}

  function inicializa(){
      
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

   gamer  = new player();


   document.addEventListener('keydown',function(tecla){

    if(tecla.keyCode == 38){
      gamer.arriba();
    }

    if(tecla.keyCode == 37){
        gamer.izquierda
  
    }

    if(tecla.keyCode == 39){
      gamer.derecha
    }

  });
  document.addEventListener('keyup',function(tecla){

    if(tecla.keyCode == 37){
     gamer.sueltaizquierda
      }
  
      if(tecla.keyCode == 39){
      gamer.sueltaderecha
      }
  
    
  });


    setInterval(function(){
        principal();
      },1000/FPS);
    }
    

    function borraCanvas(){
        canvas.width=750;
        canvas.height=500;
      }


      function principal(){
        borraCanvas();
        dibujaEscenario();
        gamer.dibuja();
      }
      