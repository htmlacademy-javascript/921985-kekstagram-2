function checkStringLength (string, maxlength) {
  return string.length <= maxlength;
}


function checkPolindrom (string) {
  let emptyString = '';
  for (let i = string.length - 1; i >= 0; --i) {
    emptyString += string[i];
  }
  return string == emptyString;
}


