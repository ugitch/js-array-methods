// UTF-16 compare function 

function compareUTF(str1, str2) {
  str1 = String(str1);
  str2 = String(str2);
  for (var i = 0; i < str1.length; i++) {
    if (str2[i] !== undefined) {
      if (compareChars(str1[i], str2[i]) < 0) {
        return -1;
      }
      else if (compareChars(str1[i], str2[i]) > 0) {
        return 1;
      }
    }
    else {
      return 1;
    }

    if (str2.length > str1.length) {
      return -1;
    }
  }
  return 0;
}

function compareChars(char1, char2) {
  char1 = char1.charCodeAt();
  char2 = char2.charCodeAt();
  if (char1 > char2) {
    return 1;
  }
  else if (char1 < char2) {
    return -1;
  }

  return 0;
}