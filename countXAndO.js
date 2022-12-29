// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//mine
function XO(str) {
    let arr = str.split("");
    let xCnt = 0
    let oCnt = 0
    for(let i = 0; i < arr.length; i++){
      if (arr[i] === 'x' || arr[i] === 'X'){
        xCnt++
      }else if(arr[i] === 'o' || arr[i] === 'O'){
        oCnt++
      }
    }
    return xCnt === oCnt ? true : false
  }

//best
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }
//also
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}