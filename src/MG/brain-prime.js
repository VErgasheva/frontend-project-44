console.log("Welcome to the Brain Games!");
process.stdout.write("May I have your name? ");

let userName = "";
let correctAnswers = 0;
const maxCorrectAnswers = 3;

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
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

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; 
}

function Prime() {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  process.stdout.write("Your answer: ");

  process.stdin.once("data", (data) => {
    const userAnswer = data.toString().trim().toLowerCase();
    const correctAnswer = isPrime(number) ? "yes" : "no";

    if (userAnswer !== "yes" && userAnswer !== "no") {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      process.exit();
    }

    if (handleAnswer(userAnswer, correctAnswer)) {
      correctAnswers++;
      if (correctAnswers === maxCorrectAnswers) {
        console.log(`Congratulations, ${userName}!`);
        process.exit();
      } else {
        Prime();
      }
    } else {
      process.exit();
    }
  });
}

process.stdin.once("data", (data) => {
  userName = data.toString().trim();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  Prime();
});