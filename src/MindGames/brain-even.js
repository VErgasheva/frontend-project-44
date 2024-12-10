import mindgames from '../index.js';
import getrandom from '../utils.js';
import geteventwo from '../even.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateTask = () => {
  const number = getrandom();
  const rightAnswer = geteventwo(number);
  const task = String(number);
  return [task, rightAnswer];
};

const geteven = () => {
  mindgames(rules, generateTask);
};

export default geteven;
