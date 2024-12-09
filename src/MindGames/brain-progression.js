import mindgames from '../index.js';
import getprogres from '../progress.js';

const rules = 'What number is missing in the progression?';

const generateTask = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;

  const progression = getprogres(2,3,50);

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
