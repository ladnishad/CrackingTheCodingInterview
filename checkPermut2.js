var inString = "abba"
var inString2 = "abbb"

function checkPerm(str, str1){
  if(str.split('').sort().join('') === str1.split('').sort().join('')){
    return("Yes")
  }
  else{
    return("No")
  }
}

console.log(checkPerm(inString,inString2))
