import mindgames from '../index.js';
import getRandom from '../utils.js';
import isEven from '../even.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateTask = () => {
  const number = getRandom();
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const task = String(number);
  return [task, rightAnswer];
};

const geteven = () => {
  mindgames(rules, generateTask);
};

export default geteven;
