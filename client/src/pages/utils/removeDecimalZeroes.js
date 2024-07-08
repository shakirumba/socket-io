export function removeDecimalZeroes(number) {
  // Convert number to string
  let numberStr = number.toString();

  // Remove trailing ".00" if present
  numberStr = numberStr.replace(/\.00$/, "");

  return numberStr;
}
