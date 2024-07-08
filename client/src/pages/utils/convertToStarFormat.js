export function convertToStarFormat(inputString) {
  const output = inputString.replace(/\x/g, "");

  return `*${output}`;
}
