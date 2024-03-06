var i=1;
var gameColor;
var playerColor;
var gamePattern=[];
var playerPattern=[];

document.addEventListener("keypress",game);
$(".btn").click(player);
$("button").click(game);



var colors=["red","green","blue","yellow"];

function game(){
    
    playerPattern=[];
    var num=Math.floor(Math.random()*4);
    document.querySelector("h1").innerHTML="LeveL "+i;
    gameColor=colors[num];
    anime(colors[num]);
    playMusic(colors[num]);
    gamePattern.push(gameColor);
    i++;
}


function player(){
    var clicked=this.id;
    anime(clicked);
    playMusic(clicked);
    playerColor=clicked;
    playerPattern.push(playerColor);
    checkAnswer(playerPattern.length-1);
}


function checkAnswer(gameLevel){
    if(gamePattern[gameLevel] === playerPattern[gameLevel]){
        if(gamePattern.length === playerPattern.length){
            operate();
        }
    }else{
        gameOver();
        startOver();
    }
}




function anime(color){
    
    $("#"+color).addClass("pressed");
    setTimeout( function(){
        $("#"+color).removeClass("pressed");
    },100);
    
}

function playMusic(music){
    var musicColor=music;

    switch(musicColor){
        case "red":
            var red=new Audio("/simon/sounds/red.mp3");
            red.play();
            break;
        case "blue":
            var blue=new Audio("/simon/sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green=new Audio("/simon/sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            var yellow=new Audio("/simon/sounds/yellow.mp3");
            yellow.play();
            break;
    }
}

function operate(){
    setTimeout( game,1000);
}

function gameOver(){

    $("h1").text("Game Over refresh the page to start again ");

    var danger=new Audio("/simon/sounds/wrong.mp3");
    danger.play();

    $("body").addClass("game-over");

    setTimeout(function(){
        $("body").removeClass("game-over");
    },500)

   i=1;
}

function startOver(){
    gamePattern=[];
    i=1;
}
