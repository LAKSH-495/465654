var gameState = 0;
var playerCount = 0;
var database;
var form1;
var game1;
var player1;
var allplayers;

function setup(){
  createCanvas(1000,800);
  database = firebase.database(); 
  game1 = new Game();
  game1.getState();
  game1.start();
}

function draw(){
  background(127);
  if (playerCount === 4){
    game1.update(1);
  }
  if(gameState === 1){
    clear();
    game1.play();
  }
}