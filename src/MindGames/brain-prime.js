import mindgames from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateTask = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const task = String(number);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [task, rightAnswer];
};

const getprime = () => {
  mindgames(rules, generateTask);
};

export default getprime;
