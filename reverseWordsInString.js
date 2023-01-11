
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"




function reverseWords(str) {
    let arr = str.split(" ")
    newArr = []
    arr.forEach(elem => newArr.push(elem.split("").reverse().join("")))
    return newArr.join(" ")
  //   return arr.reverse().join("")
  }

//my fav
function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }


  //top way
  function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }