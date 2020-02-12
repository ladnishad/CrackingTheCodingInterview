//This solution makes use of character map

//input strings
var inString = "aba"
var inString2 = "abc"

//build the charmap
function buildMap(str){
  let charObj = {}

  for(let char of str.toLowerCase()){
    if(charObj[char]){
      charObj[char]++
    }
    else{
      charObj[char] = 1
    }
  }

  return(charObj)
}

function checkPermute(str,str1){
  let strMap = buildMap(str)
  let str1Map = buildMap(str1)

  //if there is any extra character in any of the 2 strings, return false
  if(Object.keys(strMap).length != Object.keys(str1Map).length){
    return("notPermute")
  }
  //else check key-value pair
  else{
    for(let char in strMap,str1Map){
      if(strMap[char] != str1Map[char]){
        return("notPermute")
      }
    }
    return("isPermute")
  }
}

console.log(checkPermute(inString,inString2))
