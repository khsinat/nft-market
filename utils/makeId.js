export const makeId = (len) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrst0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < len; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
