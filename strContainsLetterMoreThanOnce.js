// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// mine
function isIsogram(str){
    let arr = str.toLowerCase().split("")
    let result = true
    let fromInd = 1
    for(let i = 0; i < arr.length; i++){
      if(arr.includes(arr[i], fromInd)){
        return false
      }else{
        fromInd++
      }
    }
    return result
  }

//best
  function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}