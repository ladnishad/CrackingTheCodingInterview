var inString = "Mr 3ohn Smith"

function urlify(str){
  let strArr = str.split('')

  for(let char = 0; char <= strArr.length;char++){
    if(strArr[char] == ' '){
      strArr.splice(char,1,'%20')
    }
  }

  return(strArr.join('').toString())
}

console.log(urlify(inString))
