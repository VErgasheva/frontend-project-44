import mindgames from '../index.js';
import getrandom from '../utils.js';
import getprogres from '../progress.js';

const rules = 'What number is missing in the progression?';

const generateTask = () => {
  const progressionLength = getrandom(6, 5);
  const progression = getprogres(getrandom(50, 1), getrandom(10, 1), progressionLength);
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
