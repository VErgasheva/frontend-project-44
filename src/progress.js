function getprogres(start, step, length) {
    const progression = [];
    const start = 2; 
    const step = 3;
    const length = 5;
    for (let i = 0; i < length; i += 1) {
      progression.push(start + i * step);
    }
    return progression;
  }

export default getprogres;