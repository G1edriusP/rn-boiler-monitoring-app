export const padString = (
  text: any,
  padText: string = "0",
  maxLength: number = 2,
  isStart: boolean = true,
): String => {
  return isStart
    ? String(text).padStart(maxLength, padText)
    : String(text).padEnd(maxLength, padText);
};
