import mindgames from '../index.js';

const rules = 'What number is missing in the progression?';

const generateTask = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;

  const progression = [];
  for (let i = 0; i < progressionLength; i++) {
    progression.push(start + i * step);
  }

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
