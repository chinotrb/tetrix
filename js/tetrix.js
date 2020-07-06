var canvas
var ctx
var fps = 50
var canvas2

var widthCanvas = 400;
var tallCanvas = 640;

var widthboard = 10;
var tallboard = 20;

var piece
var widthF = 40
var tallF = 40
var TopMargin = 4
//var musica 

var rosa = '#fc052e'
var verde = '#14ff08'
var azul = '#219182'
var celeste = '#57B0AF'
var vino = '#91013b'
var morado = '#7e0191'
var rojo = '#910101'
var balnco = "#ffffff"


var widthCanvas2 = 200;
var tallCanvas2 = 200;

var widthMine = 6;
var tallMine = 6;

var pieseBoard = [

    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1]
];

var board = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


var defaultBoard = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var Graphics = [
    [//cuadrado
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ],
    //linea
    [
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0]
        ],

        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0]
        ]

    ],
    //s
    [
        [
            [0, 0, 0, 0],
            [0, 0, 3, 3],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 3, 0],
            [0, 0, 3, 3],
            [0, 0, 0, 3],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 0],
            [0, 0, 3, 3],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 3, 0],
            [0, 0, 3, 3],
            [0, 0, 0, 3],
            [0, 0, 0, 0]
        ]

    ],
    //s al reves 
    [
        [
            [0, 0, 0, 0],
            [0, 4, 4, 0],
            [0, 0, 4, 4],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 4],
            [0, 0, 4, 4],
            [0, 0, 4, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 0],
            [0, 4, 4, 0],
            [0, 0, 4, 4],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 4],
            [0, 0, 4, 4],
            [0, 0, 4, 0],
            [0, 0, 0, 0]
        ]

    ],
    //L
    [
        [
            [0, 0, 0, 0],
            [0, 5, 5, 5],
            [0, 5, 0, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 5],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 0, 5],
            [0, 5, 5, 5],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 5, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 0, 0]
        ]

    ],
    //L
    [
        [
            [0, 0, 0, 0],
            [0, 6, 6, 6],
            [0, 0, 0, 6],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 6, 6],
            [0, 0, 6, 0],
            [0, 0, 6, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 6, 0, 0],
            [0, 6, 6, 6],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 6, 0],
            [0, 0, 6, 0],
            [0, 6, 6, 0],
            [0, 0, 0, 0]
        ]
    ],

    //pesa 3
    [
        [
            [0, 0, 0, 0],
            [0, 7, 7, 7],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 7, 0],
            [0, 0, 7, 7],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 7, 0],
            [0, 7, 7, 7],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],

        [
            [0, 0, 7, 0],
            [0, 7, 7, 0],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ]
    ]
];


var points = 0;

function gamerPoints() {
    points = points + 1;

    document.getElementById("gamerPoints").textContent = points;

};



var pointSav = 0;

function savePoints() {
    pointSav = pointSav + 1;
    document.getElementById("savePoints").textContent = pointSav;
};


function lose() {
    var loser = false;

    for (px = 1; px < widthboard + 1; px++) {
        if (board[2][px] > 0) {
            loser = true;
        }
    }
    return loser;
};


var objPiece = function () {
    this.x = 0;
    this.y = 0;

    this.retraso = 27;
    this.fotograma = 0;

    this.angle = 0;
    this.kind = 0;



    this.newPiece = function () {
        this.kind = Math.floor(Math.random() * 7);
        this.y = 0;
        this.x = 4;


    };


    this.clean = function () {
        const emptyLine = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        var fullRow;
        for (py = TopMargin; py < tallboard; py++) {
            fullRow = true;

            for (px = 1; px <= widthboard; px++) {
                if (board[py][px] == 0) {
                    fullRow = false;
                }
            }
            if (fullRow == true) {

                board.splice(py, 1);
                board.splice(TopMargin, 0, emptyLine);

                gamerPoints();
                savePoints();
            }

        }

    }

    this.fallOut = function () {

        if (this.fotograma < this.retraso) {
            this.fotograma++;
        }
        else {

            if (this.collision(this.angle, this.y + 1, this.x) == false) {
                this.y++;
                this.fotograma = 0
            }
            else {

                this.place()
                this.clean()
                this.newPiece()


                if (lose() == true) {
                    reseteaboard()
                    alert(pointSav)
                }
            }
        }
    };

    this.place = function () {
        for (py = 0; py < 4; py++) {
            for (px = 0; px < 4; px++) {
                if (Graphics[this.kind][this.angle][py][px] > 0) {
                    board[this.y + py][this.x + px] = Graphics[this.kind][this.angle][py][px]
                }
            }
        }
    };


    this.collision = function (angleNew, yNew, xNew) {
        var Outcome = false;

        for (py = 0; py < 4; py++) {
            for (px = 0; px < 4; px++) {
                if (Graphics[this.kind][angleNew][py][px] > 0) {
                    if (board[yNew + py][xNew + px] > 0) {
                        Outcome = true
                    }
                }
            }
        }
        return Outcome
    };


    // drawpieces 
    this.draw = function () {
        for (py = 0; py < 4; py++)
            for (px = 0; px < 4; px++) {


                if (Graphics[this.kind][this.angle][py][px] > 0) {

                    if (Graphics[this.kind][this.angle][py][px] == 1)
                        ctx.fillStyle = rojo;
                    if (Graphics[this.kind][this.angle][py][px] == 2)
                        ctx.fillStyle = morado;
                    if (Graphics[this.kind][this.angle][py][px] == 3)
                        ctx.fillStyle = vino;
                    if (Graphics[this.kind][this.angle][py][px] == 4)
                        ctx.fillStyle = azul;
                    if (Graphics[this.kind][this.angle][py][px] == 5)
                        ctx.fillStyle = verde;
                    if (Graphics[this.kind][this.angle][py][px] == 6)
                        ctx.fillStyle = rosa;
                    if (Graphics[this.kind][this.angle][py][px] == 7)
                        ctx.fillStyle = balnco;

                    ctx.fillRect((this.x + px - 1) * widthF, (this.y + py - TopMargin) * tallF, widthF, tallF)
                }
            }
    };

    //rotatepiece   
    this.rotate = function () {

        var angleNew = this.angle;

        if (angleNew < 3) {
            angleNew++;
        }
        else {
            angleNew = 0;
        }

        if (this.collision(angleNew, this.y, this.x) == false) {
            this.angle = angleNew

        }
        // console.log('rotate');
    };


    //teclas 
    this.down = function () {

        if (this.collision(this.angle, this.y + 1, this.x) == false) {
            this.y++
            // console.log('down');
        }
    }
    this.right = function () {
        if (this.collision(this.angle, this.y, this.x + 1) == false) {
            this.x++;
            //   console.log('right');
        }
    }
    this.left = function () {
        if (this.collision(this.angle, this.y, this.x - 1) == false) {
            this.x--
            //console.log('left');
        }
    }
    this.newPiece()
};




function drawBoard() {
    for (py = TopMargin; py < tallboard; py++) {
        for (px = 1; px < widthboard + 1; px++) {


            if (board[py][px] > 0) {

                if (board[py][px] == 1)
                    ctx.fillStyle = rojo;
                if (board[py][px] == 2)
                    ctx.fillStyle = morado;
                if (board[py][px] == 3)
                    ctx.fillStyle = vino;
                if (board[py][px] == 4)
                    ctx.fillStyle = azul;
                if (board[py][px] == 5)
                    ctx.fillStyle = verde;
                if (board[py][px] == 6)
                    ctx.fillStyle = rosa;
                if (board[py][px] == 7)
                    ctx.fillStyle = balnco;

                ctx.fillRect((px - 1) * widthF, (py - TopMargin) * tallF, widthF, tallF)

            }
        }
    }
};

function drawMinBoard() {
    for (my = 0; my < tallMine; my++) {
        for (mx = 0; mx < widthMine; mx++) {


            if (pieseBoard[my][mx] > 0) {

                if (pieseBoard[my][mx] == 1)
                    ctx.fillStyle = rojo;
                if (pieseBoard[my][mx] == 2)
                    ctx.fillStyle = morado;
                if (pieseBoard[my][mx] == 3)
                    ctx.fillStyle = vino;
                if (pieseBoard[my][mx] == 4)
                    ctx.fillStyle = azul;
                if (pieseBoard[my][mx] == 5)
                    ctx.fillStyle = verde;
                if (pieseBoard[my][mx] == 6)
                    ctx.fillStyle = rosa;
                if (pieseBoard[my][mx] == 7)
                    ctx.fillStyle = balnco;

                ctx.fillRect(mx * widthF, my * tallF, widthF, tallF)

            }
        }
    }
};




function recognizeKeyboard() {
    document.addEventListener('keydown', function (tecla) {

        if (tecla.keyCode == 87) {
            piece.rotate();
        }
        if (tecla.keyCode == 83) {
            piece.down();

        }
        if (tecla.keyCode == 65) {
            piece.left();

        }
        if (tecla.keyCode == 68) {
            piece.right();
        }

        if (tecla.keyCode == 71)/*g*/ {
            save(name, pointSav);
        }

        if (tecla.keyCode == 72)/*h*/ {
            var dato = load();
            console.log(dato)
        }
        if (tecla.keyCode == 66)/*b*/ {
            deletes()
        }

    });
};

var name

function askname() {
    name = prompt('name of gam  er:', '');
    document.getElementById("name").textContent = name;

};

function save(valor) {
    localStorage.setItem("name_player", valor)
    console.log("nombre guardado")
}

function load() {
    return (localStorage.getItem("name_player"));

}

function deletes() {
    localStorage.removeItem("name_player")
}



//recrear
function reseteaboard() {
    points = 0;
    document.getElementById("gamerPoints").textContent = points;

    for (py = 0; py < 21; py++) {
        for (px = 0; px < 12; px++) {
            board[py][px] = defaultBoard[py][px];
        }
    }
};




function createBoard() {
    var numFila
    var ended = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    var equaLline = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

    numFila = prompt("ingrese el numero de filas");
    document.write(numFila);

    board.push(numFila)


    return ended
};


function inicializa() {
    askname()

    canvas2 = document.getElementById('canvas2');
    ctx = canvas2.getContext('2d');
    //
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    //
    canvas.style.width = widthCanvas;
    canvas.style.height = tallCanvas;
    //
    canvas2.style.width = widthCanvas2;
    canvas2.style.height = tallCanvas2;
    //
    piece = new objPiece();
    //
    recognizeKeyboard();
    //
    setInterval(function () {
        principal()
    }, 1000 / fps)
}

function deleteCanvas() {
    canvas.width = widthCanvas;
    canvas.height = tallCanvas;
}
function deleteCanvas2() {
    canvas2.width = widthMine;
    canvas2.height = tallMine;
}


function principal() {
    deleteCanvas();
    deleteCanvas2()
    drawBoard();
    // drawMinBoard();
    piece.fallOut();
    piece.draw();
}
