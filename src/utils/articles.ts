export const getHeaders = (text: string, headerMark = '#') => {
  const pattern = `${headerMark}\\s+.+\\n`;
  const regexp = new RegExp(pattern, 'g');
  return text
    .match(regexp)
    ?.map((str) => str.split(headerMark)[1].split('\n')[0].trim());
};
