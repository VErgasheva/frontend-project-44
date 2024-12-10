import mindgames from '../index.js';
import getrandom  from './utils.js';
import getrcalculate  from './funccalc.js';

const rules = 'What is the result of the expression?';
const generateTask = () => {
  const num1 = getrandom();
  const num2 = getrandom();
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getrandom(operators.length - 1, 0)];

  const rightAnswer = getrcalculate(num1, num2, randomOperator);

  const task = `${num1} ${randomOperator} ${num2}`;
  return [task, String(rightAnswer)];
};

const getcalc = () => {
  mindgames(rules, generateTask);
};

export default getcalc;
