var canvas
var ctx 
var fps = 50

var anchoCanvas = 400;
var altoCanvas = 640;

var anchoTablero = 10;
var altoTablero  = 20;

var anchoF = 40
var altoF = 40
var margenSuperior = 4

var rosa = '#fc052e'
var verde ='#14ff08'
var azul = '#219182'
var negro = '#000000'
var vino = '#91013b'
var morado = '#7e0191'
var rojo = '#910101'

var tablero = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]

] 
var fichaGrafico= [
    [
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ]
    ],
    
    [
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ],
    
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,5,5,5],
        [0,5,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,5,0],
        [0,0,5,0],
        [0,0,5,5],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,5],
        [0,5,5,5],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,5,5,0],
        [0,0,5,0],
        [0,0,5,0],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,6,6,6],
        [0,0,0,6],
        [0,0,0,0]
        ],
    
        [
        [0,0,6,6],
        [0,0,6,0],
        [0,0,6,0],
        [0,0,0,0]
        ],
    
        [
        [0,6,0,0],
        [0,6,6,6],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,6,0],
        [0,0,6,0],
        [0,6,6,0],
        [0,0,0,0]
        ]
    ],
    
    
    [
        [
        [0,0,0,0],
        [0,7,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,0,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,7,7,7],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,7,7,0],
        [0,0,7,0],
        [0,0,0,0]
        ]
    ]
    ];
var pieza 
var objpieza  = function(){
    this.x= 0;
    this.y= 0;
    
    this.angulo = 0;
    this.tipo= 0;

    this.fotograma = 0
    this.retraso = 50
    

    this.nueva = function(){
        this.tipo =Math.floor(Math.random()*7)
        this.y = 0
        this.x = 2

    }

    this.caer = function(){
        if(this.fotograma < this.retraso){
            this.fotograma++;
        }
        else{
            this.y++;
            this.fotograma = 0 ;
        }
    }
    

    this.rotar = function(){
        if(this.angulo <3){
            this.angulo++
        }
        else{
            this.angulo=0;
        }
        console.log('rotar');  
    }
    
    this.dibuja = function(){
        for(py=0;py<4;py++){
            for(px=0;px<4;px++){
              
                
                if(fichaGrafico[this.tipo][this.angulo][py][px]>0){

                if(fichaGrafico[this.tipo][this.angulo][py][px]==1)
                    ctx.fillStyle=rojo;
                if(fichaGrafico[this.tipo][this.angulo][py][px]==2)
                    ctx.fillStyle=morado;
                if(fichaGrafico[this.tipo][this.angulo][py][px]==3)
                    ctx.fillStyle=vino;
                if(fichaGrafico[this.tipo][this.angulo][py][px]==4)
                    ctx.fillStyle=azul;
                if(fichaGrafico[this.tipo][this.angulo][py][px]==5)
                    ctx.fillStyle=verde;
                if(fichaGrafico[this.tipo][this.angulo][py][px]==6)
                    ctx.fillStyle=rosa;
                if(fichaGrafico[this.tipo][this.angulo][py][px]==7)
                    ctx.fillStyle=negro;

                ctx.fillRect((this.x + px )*anchoF, (this.y + py)*altoF , anchoF, altoF )
                
            }
        } 
        }
     
    }
    this.nueva()
    this.rotar  = function(){
        if(this.angulo <3){
            this.angulo++
        }
        else{
            this.angulo=0;
        }
        console.log('rotar');  
    }
    
    this.abajo = function(){
        this.y++
        console.log('abajo');   
       }

       this.derecha = function(){
           this.x++
        console.log('derecha');   

       }

       this.izquierda = function(){
           this.x--
        console.log('izquierda');   
       }

}


function dibujaTablero(){
        for(py=margenSuperior;py<altoTablero;py++){
            for(px=1;px<anchoTablero;px++){
              
                if(tablero[py][px]=0){

                    if(tablero[py][px]==1)
                    ctx.fillStyle=rojo;

                    if(tablero[py][px]==2)
                    ctx.fillStyle=morado;

                    if(tablero[py][px]==3)
                    ctx.fillStyle=vino;

                    if(tablero[py][px]==4)
                    ctx.fillStyle=azul;

                    if(tablero[py][px]==5)
                    ctx.fillStyle=verde;

                    if(tablero[py][px]==6)
                    ctx.fillStyle=rosa;

                    if(tablero[py][px]==7)
                    ctx.fillStyle=negro;

                ctx.fillRect((px-1)*anchoF, (py-altoTablero)*altoF , anchoF, altoF )
              
            }
        }
        }

    }

function teclado(){
    document.addEventListener('keydown',function(tecla){

         if(tecla.keyCode == 38){
            pieza.rotar();

        }
        if(tecla.keyCode == 40){
           pieza.abajo();

       }
         if(tecla.keyCode == 37){
            pieza.izquierda();

        }
        if(tecla.keyCode == 39){
           pieza.derecha();
       }
         
        
          
    });
    
}



function inicializa(){
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')

    teclado()
  
    canvas.style.width = anchoCanvas;
    canvas.style.height = altoCanvas;
    
    pieza = new objpieza();

    setInterval(function(){
        principal()
    },1000/fps)
}

function borrarCanvas(){
    canvas.width = anchoCanvas;
canvas.height =altoCanvas

}

function principal(){
borrarCanvas();
pieza.caer()  
pieza.dibuja();  
dibujaTablero()
}