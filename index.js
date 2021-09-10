//The Quiz Game
const chalk=require("chalk");
const readlineSync=require("readline-sync");
console.log(chalk.bold.magenta("Let\'s play a game to test your Superhero Knowledge!\n"));
const userName=readlineSync.question(chalk.yellow("May I have your name?\n"));
console.log("Welcome "+chalk.rgb(51,51,255)(userName.toUpperCase())+" to the \"MARVELOUS\" quiz !")
console.log(chalk.bgBlue("\nNOTE:"),"Type your answer as a,b,or c. \nCorrect answer gives you +2 points.\nIncorrect answer gets you -1 point.\n")

let score=0;
const quesList=[{question:"Q1)What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\na)2005\nb)2008\nc)2010\n",answer:"b"},
              {question: "Q2)What is the real name of the Black Panther?\na)T’Challa\nb)M’Baku\nc)N’Jobu\n",answer:"a"},
              {question:"Q3)Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?\na)Thor\nb)Loki\nc)The Collector\n",answer:"b"},
              {question:"Q4)What is the name of the little boy Tony befriends while stranded in the Iron Man 3?\na)Harry\nb)Harley\nc)Henry\n",answer:"b"},
              {question:"Q5)Who is killed by Loki in the Avengers?\na)Maria Hill\nb)Agent Coulson\nc)Doctor Erik Selvig\n", answer:"b"},{question:"Q6)What does the Winter Soldier say after Steve recognizes him for the first time?\na)“Who the hell is Bucky?”\nb)“Do I know you?”\nc)“Do I know you?”\n",answer:"a"}]

function play(question,answer){
  let userAnswer=readlineSync.question(chalk.cyanBright(question));
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("You are Right!"));
    score=score+2;
    console.log("Your current score is ",score);
    console.log("-----------------");
  }
  else{
    console.log(chalk.red("You are Wrong!"));
    console.log(chalk.bgBlue("Correct answer is ",answer.toUpperCase()));
    score=score-1;
    console.log("Your current score is ",score);
    console.log(chalk.bold("-----------------"));
  }
}
for(let i=0;i<quesList.length;i++){
  play(quesList[i].question,quesList[i].answer);
}
console.log(chalk.cyan("YAY! You have completed the quiz.\n"));
console.log(chalk.bgYellow("Your final score is "),score);
console.log('---------------');

var highScore=["\nGaurav  \n","AnonymousMe  \n"];
if(score>9){
highScore.unshift(chalk.bgYellow(userName.toUpperCase()));
console.log("CONGRATS "+ userName.toUpperCase()+"!! You have entered the Leaderboard.\n");
console.log(chalk.bgRed("LEADERBOARD---\n"));
for(let i=0;i<highScore.length;i++){
  console.log(chalk.bold(highScore[i]));
}
}
else{
  console.log("Nice try "+userName.toUpperCase()+".But you need to score higher to enter the Leaderboard.\n");
  console.log(chalk.bgRed("LEADERBOARD---\n"));
  for(let i=0;i<highScore.length;i++){
  console.log(chalk.bold(highScore[i]));
  }
}