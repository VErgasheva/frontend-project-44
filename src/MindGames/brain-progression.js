import mindgames from '../index.js';
import getRandom from '../utils.js';
import getProgression from '../progress.js';

const rules = 'What number is missing in the progression?';

const generateTask = () => {
  const progressionLength = getRandom(6, 5);
  const progression = getProgression(getRandom(50, 1), getRandom(10, 1), progressionLength);
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
