var inString = "aabcdee"

function checkUn(str){
  for(let i = 0; i < str.length; i++){
    for(j = i+1; j < str.length; j++){
      if(str[i] === str[j]){
        return( "Not unique")
      }
    }
  }
  return("Yes")
}

console.log(checkUn(inString))
