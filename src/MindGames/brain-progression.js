import mindgames from '../index.js';
import getrandom  from '../utils.js';
import getprogres from '../progress.js';

const rules = 'What number is missing in the progression?';

const generateTask = () => {
  const progressionLength = getrandom;
  const progression = getprogres(getrandom, getrandom, getrandom);
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
