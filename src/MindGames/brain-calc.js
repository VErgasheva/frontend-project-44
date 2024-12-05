import mindgames from '../index.js';

const rules = 'What is the result of the expression?';
const generateTask = () => {
  const num1 = Math.floor(Math.random() * 50) + 1
  const num2 = Math.floor(Math.random() * 50) + 1;
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  let rightAnswer;
  switch (randomOperator) {
    case '+':
      rightAnswer = num1 + num2;
      break;
    case '-':
      rightAnswer = num1 - num2;
      break;
    case '*':
      rightAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: ${randomOperator}`);
  }

  const task = `${num1} ${randomOperator} ${num2}`;
  return [task, String(rightAnswer)];
};

const getcalc = () => {
  mindgames(rules, generateTask);
};

export default getcalc;
