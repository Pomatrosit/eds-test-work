export const getFirstLetter = (str: string) => {
  return str[0].toUpperCase();
};

export const uppercaseFirstLetter = (str: string) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
};
