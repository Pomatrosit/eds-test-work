class StringService {
  getFirstLetter(str: string) {
    return str[0].toUpperCase();
  }

  uppercaseFirstLetter(str: string) {
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
  }
}

export const stringService = new StringService();
