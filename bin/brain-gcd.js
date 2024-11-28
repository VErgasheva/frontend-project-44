console.log("Welcome to the Brain Games!");
process.stdout.write("May I have your name? ");

let userName = "";
let correctAnswers = 0;
const maxCorrectAnswers = 3;

function getGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; 
}

function handleAnswer(userAnswer, correctAnswer) {
  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
}

function playGame() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const correctAnswer = getGCD(num1, num2);

  console.log(`Question: ${num1} ${num2}`);
  process.stdout.write("Your answer: ");

  process.stdin.once("data", (data) => {
    const userAnswer = data.toString().trim();

    if (isNaN(userAnswer)) {
      console.log(`'${userAnswer}' is not a valid number.`);
      console.log(`Let's try again, ${userName}!`);
      process.exit();
    }

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
  console.log("Find the greatest common divisor of given numbers.");
  playGame();
});