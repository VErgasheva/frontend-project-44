import mindgames from '../index.js';
import getrandom  from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const generateTask = () => {

  function getGCD(a, b) {
    let x = a;
    let y = b;
    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }
  const num1 = getrandom();
  const num2 = getrandom();
  const rightAnswer = getGCD(num1, num2);

  const task = `${num1} ${num2}`;
  return [task, String(rightAnswer)];
};

const getgcd = () => {
  mindgames(rules, generateTask);
};

export default getgcd;
