export const cutText = (text, symbols = 60) => {
  return text.slice(0, symbols).concat('...');
};
