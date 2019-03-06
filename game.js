
var myGamePiece1;
var myGamePiece2;

function startGame() {
    myGamePiece1 = new component(30, 30, "red", 10, 10, "image");
    myGamePiece2 = new component(30, 30, "blue", 150, 150, "image");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1500;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece1.update();
    myGamePiece2.update();
}

function authenticateLogin() {
print("apple")

}

function add_user() {
    var nameElement = document.getElementById("userN");
    var name = nameElement.value;
    nameElement.value = "";

    var emailElement = document.getElementById("userE");
    var email = emailElement.value;
    emailElement.value = "";

    var passElement = document.getElementById("userP");
    var pass = passElement.value;
    passElement.value = "";

    var toSend = JSON.stringify({"userN": name, "userE": email,"userP": pass});

    ajaxPostRequest("/send", toSend, update_users);

}