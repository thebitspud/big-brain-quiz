export const shuffleArray = (target: any[]) => {
  for (let i = target.length - 1; i > 0; i--) {
    // Efficient ES6 random sort
    const j = Math.floor(Math.random() * (i + 1));
    [target[i], target[j]] = [target[j], target[i]];
  }

  return target;
};
