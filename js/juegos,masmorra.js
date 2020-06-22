var camvas ;
var CTX;
var fps = 50;

var altof= 50;
var anchof= 50
var gamer


var sonido1;
var sonido2;
var enemigo =[];
var imagenantorcha 
var enemigo 

var esenario = [
    [0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,],
    [3,2,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,2,0,],
    [0,2,2,2,2,2,2,0,0,2,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,],
    [0,0,0,2,2,2,2,0,0,2,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,],
    [0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,],
    [0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,],
    [0,0,0,2,0,0,2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,],
    [0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,1,0,],
    [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
    
];

/*sonido1 = new Howl({
  src:['sonido/sonido1.wav'],
  loop :false
})

sonido2 = new Howl({
  src:['sonido/sonido2.wav'],
  loop :false
})
*/

function dibujaEscenario(){


    for(y=0;y<10;y++){
      for(x=0;x<30;x++){
  
        var tile = esenario[y][x];
        ctx.drawImage(tileMap,tile*32,0,32,32,anchof*x,altof*y,anchof,altof); 
      }
    }
  }


var malo = function(x,y){
  this.y = y;
  this.x = x;

  this.direccion =  Math.floor(Math.random()*4)

this.retraso =50;
this.fotograma = 0;

  this.dibuja =function(){
    ctx.drawImage(tileMap,32,32,32,32,this.x*anchof,this.y*altof,anchof,altof);
      
  }

  this.compruebacolision = function(x,y){
    var colisiona = false 

    if (esenario[y][x]==0){
      colisiona= true;
    }
return colisiona 
  }

  this.mueve = function(){

    gamer.colisionEnemigo(this.x, this.y);

if(this.contador < this.retraso){
  this.contador++;
}
else{
this.contador = 0;


//arriba
if(this.direccion ==0){
  if(this.compruebacolision(this.x, this.y -1 )==false){
    this.y--;
  }
  else{
    this.direccion = Math.floor(Math.random()*4);
  }
}
//abajo
if(this.direccion ==1){
  if(this.compruebacolision(this.x, this.y +1 )==false){
    this.y++;
  }
  else{
    this.direccion = Math.floor(Math.random()*4);
  }
}
//izquierda
if(this.direccion ==2){
  if(this.compruebacolision(this.x-1, this.y )==false){
    this.x--;
  }
  else{
    this.direccion = Math.floor(Math.random()*4);
  }
}
//derecha
if(this.direccion ==3){
  if(this.compruebacolision(this.x+1, this.y)==false){
    this.y++;
  }
  else{
    this.direccion = Math.floor(Math.random()*4);
  }
}
  }
}
}



var player = function(){
    this.x = 1;
    this.y = 9;
    this.llave = false;

    this.color = '#610000'
    this.dibuja = function(){
      ctx.drawImage(tileMap,0,32,32,32,this.x*anchof,this.y*altof,anchof,altof);
      
    }
    this.colisionEnemigo = function(x,y){
      if(this.x == x && this.y == y){
        this.muerte();
      }
  
    }
     
    this.Reglas = function(x,y){
        var colicion = false;

        if (esenario[y][x]==0){
            colicion= true;
        }
        return(colicion)
    }

    this.arriba =function(){
        if(this.Reglas(this.x , this.y-1)==false)
        this.y--;
        this.logicaObjetos();
    
    }
    this.abajo =function(){
        if(this.Reglas(this.x , this.y+1)==false)
        this.y++;
        this.logicaObjetos();
    
    }
    this.izquierda =function(){
        if(this.Reglas(this.x-1 , this.y)==false)
        this.x--;
        this.logicaObjetos();
    
    }
    this.derecha =function(){
        if(this.Reglas(this.x+1 , this.y)==false)
        this.x++;
        this.logicaObjetos();
    
    }

    this.victoria = function(){
      console.log('fin del juego');
  
      this.x = 3;
      this.y = 8;
  
      this.llave = false;   
      escenario[1][2] = 3;
    }


    this.muerte  = function(){
      console.log('as perdido');
  
      this.x = 1;
      this.y = 9;
  
      this.llave = false;   
      escenario[1][2] = 3; 
    }
  
  

    this.logicaObjetos = function(){
        var objeto = esenario[this.y][this.x];
        
              if(objeto == 3){
                this.llave = true;
                esenario[this.y][this.x]=2;
                console.log('ya te puedes ir');
              }
        
        
              if(objeto == 1){
                if(this.llave == true)
                  this.victoria();
                else{
                  console.log('la llave?');
                }
              }
        
        
            }
        
          }

this.antorcha = function(x,y){
this.x = x
this.y = y

this.retraso=10
this.contador= 0;
this.fotograma = 0;



this.cambiaFotograma = function(){
  if(this.fotograma < 3) {
    this.fotograma++;
  }
  else{
    this.fotograma = 0;
  }

}


this.dibuja = function(){

  if(this.contador < this.retraso){
    this.contador++
  }
  else{
    this.contador = 0
    this.cambiaFotograma();
  }

  ctx.drawImage(tileMap,this.fotograma*32,64,32,32,anchof*x,altof*y,anchof,altof);
}
}

function inicializa(){
    canvas = document.getElementById('canvas')
    ctx =canvas.getContext('2d')

     gamer = new player();
     tileMap = new Image();
     tileMap.src = 'img/tilemap.png';


     imagenantorcha = new antorcha(0,0)

     enemigo.push(new malo(11,2))
     enemigo.push(new malo(4,3))
     enemigo.push(new malo(25,6))
     enemigo.push(new malo(27,6))

     document.addEventListener('keydown',function(tecla){
         if(tecla.keyCode == 38){
         gamer.arriba();
         }

         if(tecla.keyCode == 40){
            gamer.abajo();

        }

         if(tecla.keyCode == 37){
            gamer.izquierda();

        }

         if(tecla.keyCode == 39){
            gamer.derecha();

        }

        if(tecla.keyCode == 87){
          sonido1.play()
        }

        if(tecla.keyCode == 88){
          sonido2.play()
        }
         
     })

setInterval(function(){
    principal();
},1000/fps);
}

function borraCanvas(){
    canvas.width = 1500;
    canvas.height = 500;
}
function principal(){
    borraCanvas();
    dibujaEscenario()
    gamer.dibuja();
    imagenantorcha.dibuja()
    
    for(c=0; c<enemigo.length; c++){
      enemigo[c].mueve()
       enemigo[c].dibuja();
    }
   


}

