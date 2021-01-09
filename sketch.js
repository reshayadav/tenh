var database;
var form,game,player;
var bg;
var gameState =0;
var playerCount;

function preload(){

}

function setup(){
  createCanvas(displayWidth,displayHeight);

database = firebase.database();

game = new Game();
game.getState();
game.start();


}

function draw() {
  background(200);  


 
}
