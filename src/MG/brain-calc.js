console.log("Welcome to the Brain Games!");
process.stdout.write("May I have your name? ");

let userName = "";
let correctAnswers = 0;
const maxCorrectAnswers = 3;

function getRandomNumber(max = 100) {
  return Math.floor(Math.random() * max) + 1;
}

function generateExpression() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operations = ["+", "-", "*"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let correctAnswer;
  switch (operation) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
  }

  return {
    question: `${num1} ${operation} ${num2}`,
    correctAnswer: correctAnswer.toString(),
  };
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

function Calc() {
  const { question, correctAnswer } = generateExpression();
  console.log(`Question: ${question}`);
  process.stdout.write("Your answer: ");

  process.stdin.once("data", (data) => {
    const userAnswer = data.toString().trim();

    if (handleAnswer(userAnswer, correctAnswer)) {
      correctAnswers++;
      if (correctAnswers === maxCorrectAnswers) {
        console.log(`Congratulations, ${userName}!`);
        process.exit();
      } else {
        Calc();
      }
    } else {
      process.exit();
    }
  });
}

process.stdin.once("data", (data) => {
  userName = data.toString().trim();
  console.log(`Hello, ${userName}!`);
  console.log("What is the result of the expression?");
  Calc();
});