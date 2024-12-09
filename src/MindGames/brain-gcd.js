import mindgames from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const generateTask = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

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

