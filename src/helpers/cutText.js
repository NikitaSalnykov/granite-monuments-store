export const cutText = (text, symbols = 60) => {
  if (text.length > symbols) {
    return text.slice(0, symbols).concat('...');
  }
  return text;
};
