// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//my first attempt which didnt work because it only removed first occurance of the character
function removeExclamationMarks(s) {
  return s.replace('!', '')
}

//my second attempt
function removeExclamationMarks(s) {
  return s.split('!').join('')
}


//others that used the method that I first used, however uses regex to search entire string, not just first occurance
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}