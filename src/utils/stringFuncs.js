const  trimChar = (string, charToRemove) => {
  while (string?.length && string.charAt(0) === charToRemove) {
    string = string.substring(1);
  }

  while (string?.length && string.charAt(string.length - 1) === charToRemove) {
    string = string.substring(0, string.length - 1);
  }

  return string;
}

export {
  trimChar
};