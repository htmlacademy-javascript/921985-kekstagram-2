function checkStringLength (string, length) {
  return string.length <= length;
}


function checkPolindrom (string) {
  string = string.toLowerCase();
  string = string.replaceAll(' ', '');
  let emptyString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    emptyString += string[i];
  }
  return string === emptyString;
}

function getNumbers (string) {
  string = string.toString();
  let numbers = '';
  for (let i = 0; i <= string.length; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      numbers += string[i];
    }
  }
  return numbers;
}

