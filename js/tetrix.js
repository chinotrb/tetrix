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
    ];
    

    var tableroSecundario = [
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
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
        ];
        

var fichaGrafico= [
    [//cuadrado
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
    //linea
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
    //s
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
    //s al reves 
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
    //L
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
    //L
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
    
    //pesa 3
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
    this.y= 0 ;

    this.retraso=50;
    this.fotograma=0;
    
    this.angulo = 0;
    this.tipo= 6;
//crea pieza 
this.nueva = function(){
    this.tipo = Math.floor(Math.random()*7);
    this.y =0;  
    this.x =4;
}


this.perder = function(){
    var pierde = false;

    for(px=1;px<anchoTablero+1;px++){
    if(tablero[2][px]>0){
        pierde = true;
        
    }   
    }
    return pierde;
};

//limpiar ultima fila 
this.limpia = function(){

    var filaCompleta;

    for(py=margenSuperior;py<altoTablero;py++){

        filaCompleta = true;

        for(px=1;px<=anchoTablero;px++){
            if(tablero[py][px]==0){
                filaCompleta = false;
            }
        }

        if(filaCompleta == true){
            console.log("limpia");
            for(px=1;px<=anchoTablero;px++){
                tablero[py][px] = 0;
            }
        }


    }

};


this.caer = function(){
if(this.fotograma <this.retraso){
this.fotograma++;
}
else{

    if(this.colision(this.angulo,this.y+1,this.x)==false){
 this.y++;
 this.fotograma= 0
}
else{



     this.fijar()
     this.limpia()
    this.nueva()


 if(this.perder()==true){
     reseteaTablero()
 }
}   
}
};

this.fijar = function(){
    for(py=0;py<4;py++){
        for(px=0;px<4;px++){
            if(fichaGrafico[this.tipo][this.angulo][py][px]>0){
               tablero[this.y+py][this.x+px] =fichaGrafico[this.tipo][this.angulo][py][px]

}
    }
}
};

//chocar pieza    
this.colision = function(anguloNuevo , yNueva , xNueva){
    var resultado= false;

    for(py=0;py<4;py++){
        for(px=0;px<4;px++){
            if(fichaGrafico[this.tipo][anguloNuevo][py][px]>0){
                if(tablero[yNueva+py][xNueva+px]>0){
                    resultado=true
                }
            }

}
    }
    return resultado
}


// dibuja piezas 
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

                ctx.fillRect((this.x + px -1 )*anchoF, (this.y + py - margenSuperior) *altoF , anchoF, altoF )
                
            }
        } 
        }
     
    }

//rotar pieza   
this.rotar = function(){

    var anguloNuevo=this.angulo;


    if ( anguloNuevo < 3){
        anguloNuevo++;
    }
    else{
        anguloNuevo=0;
    }

    if(this.colision(anguloNuevo,this.y,this.x)==false){
    this.angulo =anguloNuevo
}
     console.log('rotar'); 
}


//teclas
    
    this.abajo = function(){
        if(this.colision(this.angulo,this.y+1,this.x)==false){
        this.y ++
        console.log('abajo');   
     }
       }
    

       this.derecha = function(){
        if(this.colision(this.angulo,this.y,this.x+1)==false){
        this.x ++;
        console.log('derecha');   
        }
    }
       

       this.izquierda = function(){
        if(this.colision(this.angulo,this.y,this.x-1)==false){
        this.x --
        console.log('izquierda');   
       }
    }
       this.nueva()

};

   
function dibujaTablero(){
        for(py=margenSuperior;py<altoTablero;py++){
            for(px=1;px<anchoTablero+1;px++){
              
                
                if(tablero[py][px]>0){

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

                ctx.fillRect( (px -1)*anchoF, (py - margenSuperior )*altoF , anchoF, altoF )
                
            }
        } 
        }
     
    }


   	


function InicialisaTeclado(){
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
//recrear

function reseteaTablero(){
    console.log("as perdido")
    for(py=0;py<21;py++){
        for(px=0;px<12;px++){
           tablero[py][px]=tableroSecundario[py][px];


}
    }
}




function inicializa(){
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
///
    canvas.style.width = anchoCanvas;
    canvas.style.height= altoCanvas;

////
    pieza = new objpieza();
   ///
    InicialisaTeclado();

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
dibujaTablero();
pieza.caer()
pieza.dibuja();

}