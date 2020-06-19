var camvas ;
var CTX;
var fps = 50;

var altof= 50;
var anchof= 50
var gamer

var puera = '#541e05'
var llave = '#2b2b2a'
var cafe = '#8c520b';
var negro  = '#292929';

var esenario = [
    [0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
    [2,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,],
    [0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,],
    [0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,]
    
];

function dibujaEsenario(){
    var color;

    for (y=0;y<10;y++){
        for (x=0;x<30;x++){

            if(esenario[y][x]==1)
            color = cafe;
            if(esenario[y][x]==0)
            color = negro;

            ctx.fillStyle = color;
            ctx.fillRect(x*anchof,y*altof,anchof,altof)
        }
    }
}

var player = function(){
    this.x = 1;
    this.y = 9;
    this.llave = false;

    this.color = '#610000'
    this.dibuja = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x*anchof,this.y*altof,anchof,altof)   
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
    console.log('has gando ')
    this.x = 1;
    this.y = 9;
    this.llave = false 
    esenario[8][3];
    }

    this.logicaObjetos = function(){
        var objeto = esenario[this.y][this.x];

        if (objeto == 2 )
        this.llave = true;
        esenario[this.y][this.x] = 1;
        console.log('tienes las llave')
    
    }
     


}




function inicializa(){
    canvas = document.getElementById('canvas')
    ctx =canvas.getContext('2d')

     gamer = new player();

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
         
     })

setInterval(function(){
    principal();
},1000/fps);
}

function borraCanvas(){
    canvas.width = 1500;
    canvas.height = 500;
var imgali;
}
function principal(){
    borraCanvas();
    dibujaEsenario();
    gamer.dibuja();
}

