var canvas
var ctx 
var fps = 50

var widthCanvas = 400;
var tallCanvas = 640;

var widthboard = 10;
var tallboard  = 20;

var piece 
var widthF = 40
var tallF = 40
var TopMargin = 4
//var musica 

var rosa = '#fc052e'
var verde ='#14ff08'
var azul = '#219182'
var negro = '#000000'
var vino = '#91013b'
var morado = '#7e0191'
var rojo = '#910101'

var board = [
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
    

    var boardSecond = [
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
        

var Graphics= [
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



var objpiece  = function(){
    this.x= 0;
    this.y= 0 ;

    this.retraso=50;
    this.fotograma=0;
    
    this.angle = 0;
    this.kind= 6;
//crea piece 
this.newPiece = function(){
    this.kind = Math.floor(Math.random()*7);
    this.y =0;  
    this.x =4;
};


this.lose= function(){
    var loser = false;

    for(px=1;px<widthboard+1;px++){
    if(board[2][px]>0){
        loser = true;
        
             }   
        }
    return loser;
};

this.bajarpieces = function(){
    var pieces;


    for(py=TopMargin;py<tallboard;py++){
        pieces = true;

        for(px=1;px<=widthboard;px++){
            if(board[py][px]==0){
                pieces =false;

            }

    }
    if(pieces = true){
        for (px=1;px<=widthboard;px++){
            if(board[py][px]=pieces ){
            }
        }   
    }
}
};


//limpiar fila completa  
this.clean = function(){

    var filaCompleta;

    for(py=TopMargin;py<tallboard;py++){

        FullRow= true;

        for(px=1;px<=widthboard;px++){
            if(board[py][px]==0){
                FullRow= false;
            }
        }
        if(FullRow== true){
            console.log("clean");
            for(px=1;px<=widthboard;px++){
                board[py][px] = 0;
            }
            this.bajarpieces()
        }
    }
};


this.fallOut = function(){
if(this.fotograma <this.retraso){
this.fotograma++;
}
else{

    if(this.collision(this.angle,this.y+1,this.x)==false){
 this.y++;
 this.fotograma= 0
 }
else{

     this.place()
     this.clean()
     this.newPiece()

 if(this.lose()==true){
     reseteaboard()
            }
        }   
    }
};

this.place = function(){
    for(py=0;py<4;py++){
        for(px=0;px<4;px++){
            if(Graphics[this.kind][this.angle][py][px]>0){
               board[this.y+py][this.x+px] =Graphics[this.kind][this.angle][py][px]
            }
         }  
    }
};

//chocar piece    
this.collision = function(angleNew , yNew , xNew){
    var Outcome= false;

    for(py=0;py<4;py++){
        for(px=0;px<4;px++){
            if(Graphics[this.kind][angleNew][py][px]>0){
                if(board[yNew+py][xNew+px]>0){
                    Outcome=true
                }
            }
        }
    }
   return Outcome
};


// drawpieces 
    this.draw= function(){

        for(py=0;py<4;py++){
            for(px=0;px<4;px++){
              
                
                if(Graphics[this.kind][this.angle][py][px]>0){

                if(Graphics[this.kind][this.angle][py][px]==1)
                    ctx.fillStyle=rojo;
                if(Graphics[this.kind][this.angle][py][px]==2)
                    ctx.fillStyle=morado;
                if(Graphics[this.kind][this.angle][py][px]==3)
                    ctx.fillStyle=vino;
                if(Graphics[this.kind][this.angle][py][px]==4)
                    ctx.fillStyle=azul;
                if(Graphics[this.kind][this.angle][py][px]==5)
                    ctx.fillStyle=verde;
                if(Graphics[this.kind][this.angle][py][px]==6)
                    ctx.fillStyle=rosa;
                if(Graphics[this.kind][this.angle][py][px]==7)
                    ctx.fillStyle=negro;

                ctx.fillRect((this.x + px -1 )*widthF, (this.y + py - TopMargin) *tallF , widthF, tallF )
                
            }
        } 
    }
 };

//rotatepiece   
this.rotate= function(){

    var angleNew=this.angle;

    if ( angleNew < 3){
        angleNew++;
    }
    else{
        angleNew=0;
    }

    if(this.collision(angleNew,this.y,this.x)==false){
    this.angle =angleNew

    }
     console.log('rotate'); 
};


//teclas 
    this.down = function(){

        if(this.collision(this.angle,this.y+1,this.x)==false){
        this.y ++
        console.log('down');   
     }
       }
       this.right = function(){
        if(this.collision(this.angle,this.y,this.x+1)==false){
        this.x ++;
        console.log('right');   
        }
    }
       this.left = function(){
        if(this.collision(this.angle,this.y,this.x-1)==false){
        this.x --
        console.log('left');   
       }
    }
       this.newPiece()
};

   
function drawBoard(){
        for(py=TopMargin;py<tallboard;py++){
            for(px=1;px<widthboard+1;px++){
              
                
                if(board[py][px]>0){

                if(board[py][px]==1)
                    ctx.fillStyle=rojo;
                if(board[py][px]==2)
                    ctx.fillStyle=morado;
                if(board[py][px]==3)
                    ctx.fillStyle=vino;
                if(board[py][px]==4)
                    ctx.fillStyle=azul;
                if(board[py][px]==5)
                    ctx.fillStyle=verde;
                if(board[py][px]==6)
                    ctx.fillStyle=rosa;
                if(board[py][px]==7)
                    ctx.fillStyle=negro;

                ctx.fillRect( (px -1)*widthF, (py - TopMargin )*tallF , widthF, tallF )
                
           }
        } 
     }
 };


   	


function recognizeKeyboard(){
    document.addEventListener('keydown',function(tecla){

         if(tecla.keyCode == 38){

            piece.rotate();

        }
        if(tecla.keyCode == 40){
           piece.down();

       }
         if(tecla.keyCode == 37){
            piece.left();

        }
        if(tecla.keyCode == 39){
           piece.right();
       }     
    });  
}

//recrear
function reseteaboard(){
    console.log("you are a lousy")
    for(py=0;py<21;py++){
        for(px=0;px<12;px++){
           board[py][px]=boardSecond[py][px];
        }
    }
};

/*
    musica = new Howl({
    src:['musica/tetrix.wav'],
    loop : true  
  })*/


function inicializa(){
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
///

    canvas.style.width = widthCanvas;
    canvas.style.height= tallCanvas;

////
    piece = new objpiece();
///
/*
musica.play()*/
///

    recognizeKeyboard();

    setInterval(function(){
        principal()
    },1000/fps)
}

function deleteCanvas(){
canvas.width = widthCanvas;
canvas.height =tallCanvas
}

function principal(){
deleteCanvas(); 
drawBoard();
piece.fallOut()
piece.draw();
}