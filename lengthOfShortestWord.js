// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


//mine
function findShort(s){
    let arr = s.split(" ")
    let lengths = arr.map(x => x.length)
    return Math.min(...lengths)
  }

//mine on one line solution by someone else on codewars
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }


//cool solution
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }