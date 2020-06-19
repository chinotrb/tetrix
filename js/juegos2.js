
var camvas ;
var CTX;
var fps = 50;

function inicializa(){
    canvas = document.getElementById('canvas')
    ctx =canvas.getContext('2d')

setInterval(function(){
    principal();
},1000/fps);
}

function borraCanvas(){
    canvas.width = 500;
    canvas.height = 400;
var imgali;

function principal(){
   borraCanvas();

   per1.dibuja();
   per2.dibuja();
   per3.dibuja();

   per1.mueve();
   per2.mueve();
   per3.mueve();
   prota.dibuja();  
}

var personaje = function(x,y){
    this.x = x ;
    this.y = y; 
    this.derecha = true;
}


var protagonista = function(x,y){
    this,x=x;
    this,y=y;

    this.dibuja = function(){
        ctx.drawImagen(imgalie,this,y, this,x );

    }
}

this.dibuja = function(){
    ctx.fillStyle = '#fff000'
    ctx.fillRect (this.x, this.y, 50,50 )
}



}

var per1 = new personaje(5,100);
var per2 = new personaje(10,200);
var per3 = new personaje(10,300);

var prota = new protagonista(200, 200)

this.mueve() = function(){

    if(this.derecha == true){
      if(this.x < 400)
       this.x++;

       else{
           this.derecha = false;
        
       }
    }
    else{
        if(this.x > 50)
        this.x--;
        else{
            this.derecha = true;
        }
    }
    

}







