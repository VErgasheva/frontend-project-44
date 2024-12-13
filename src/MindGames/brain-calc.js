import mindgames from '../index.js';
import getRandom from '../utils.js';

function getCalculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}
const rules = 'What is the result of the expression?';
const generateTask = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandom(operators.length - 1, 0)];

  const rightAnswer = getCalculate(num1, num2, randomOperator);

  const task = `${num1} ${randomOperator} ${num2}`;
  return [task, String(rightAnswer)];
};

const getcalc = () => {
  mindgames(rules, generateTask);
};

export default getcalc;
