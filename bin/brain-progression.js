console.log("Welcome to the Brain Games!");
process.stdout.write("May I have your name? ");

let userName = "";
let correctAnswers = 0;
const maxCorrectAnswers = 3;

function generateProgression(start, step, length) {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
}

function getRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
}

function playGame() {
  const progressionLength = getRandomNumber(5, 10); 
  const start = getRandomNumber(1, 50); 
  const step = getRandomNumber(1, 10); 
  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = getRandomNumber(0, progression.length - 1);  
  const correctAnswer = progression[hiddenIndex].toString(); 
  progression[hiddenIndex] = ".."; 

  console.log(`Question: ${progression.join(" ")}`);
  process.stdout.write("Your answer: ");

  process.stdin.once("data", (data) => {
    const userAnswer = data.toString().trim();

    if (handleAnswer(userAnswer, correctAnswer)) {
      correctAnswers++;
      if (correctAnswers === maxCorrectAnswers) {
        console.log(`Congratulations, ${userName}!`);
        process.exit();
      } else {
        playGame(); 
      }
    } else {
      process.exit();
    }
  });
}

process.stdin.once("data", (data) => {
  userName = data.toString().trim();
  console.log(`Hello, ${userName}!`);
  console.log("What number is missing in the progression?");
  playGame();
});