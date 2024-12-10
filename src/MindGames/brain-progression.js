import mindgames from '../index.js';
import getrandom  from '../utils.js';
import getprogres  from '../progress.js';

const rules = 'What number is missing in the progression?';

const generateTask = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(getrandom()) + 1;
  const step = Math.floor(getrandom()) + 1;

  const progression = getprogres();

  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const task = progression.join(' ');
  return [task, correctAnswer];
};

const getprogression = () => {
  mindgames(rules, generateTask);
};

export default getprogression;
