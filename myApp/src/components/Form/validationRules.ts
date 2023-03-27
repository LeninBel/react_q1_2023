export const isEmpty = (value: string | undefined) => value === undefined || value.trim() === '';

export const isStartWithUpperCase = (value: string): boolean => {
  console.log("sdfsdf");
  const regex = /[A-Z]/g;
  const found = value[0].match(regex);
  return found !== null;
};

export const isDateInPast = (nowDate: number, value: string | undefined) => {
  if (value === undefined) return false;
  const date = +new Date(value);
  return date <= nowDate;
};
