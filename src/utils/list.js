const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const shuffleArray = (array) => {
  const copiedArray = [...array];
  const list = [];

  while (copiedArray.length) {
    const index = getRandom(0, copiedArray.length - 1);
    const [element] = copiedArray.splice(index, 1);

    list.push(element);
  }

  return list;
};
