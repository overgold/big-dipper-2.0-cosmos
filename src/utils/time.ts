/**
 * util to conver nano to seconds
 * @param nano
 * @returns seconds
 */
export const nanoToSeconds = (nano: number) => {
  return nano / 1000000000;
};

/**
 * Util to convert seconds to days
 * @param seconds
 * @returns days
 */
export const secondsToDays = (seconds: number) => {
  return seconds / (3600 * 24);
};

export const subtractYears = (numOfYears, date = new Date()) => {
  date.setFullYear(date.getFullYear() - numOfYears);
  return date.toString();
};
