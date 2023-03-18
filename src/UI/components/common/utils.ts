export const minute = (seconds: number = 0) => {
  const secondsOff = seconds % 60;
  const minutes = Math.floor(seconds / 60);
  const secondsString = secondsOff < 10 ? `0${secondsOff}` : secondsOff;
  const minutesString = minutes < 10 ? `0${minutes}` : minutes;

  return `${minutesString}:${secondsString}`;
};
