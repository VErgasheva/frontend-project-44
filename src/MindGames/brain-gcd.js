import mindgames from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const generateTask = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const getGCD = (a, b) => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const rightAnswer = getGCD(num1, num2);

  const task = `${num1} ${num2}`;
  return [task, String(rightAnswer)];
};

const getgcd = () => {
  mindgames(rules, generateTask);
};

export default getgcd;