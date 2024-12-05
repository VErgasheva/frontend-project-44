import mindgames from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateTask = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  const task = String(number);
  return [task, rightAnswer];
};

const geteven = () => {
  mindgames(rules, generateTask);
};

export default geteven;
