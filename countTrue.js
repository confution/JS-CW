// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//mine 
function countSheeps(arrayOfSheep) {
    let countTrue = 0;
    let countElse = 0;
    arrayOfSheep.forEach(sheep => sheep === true ? countTrue +=1 : countElse += 1 )
    return countTrue
  }

//best
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }