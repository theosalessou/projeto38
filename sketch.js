var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(1000,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
 
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
   // clear();
    quiz.play();
  }
  
  if (contestantCount > 2 && gameState === 1) { // verifica se há mais de 2 concorrentes e se o jogo está em andamento
    quiz.update(0);
    contestant.updateCount(0);
  }
}