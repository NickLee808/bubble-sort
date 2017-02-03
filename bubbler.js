//jshint esversion:6

function bubbler(inputArray){
  let sorted = false;

  while(sorted === false){
    sorted = true;
    for(let i = 0; i < inputArray.length; i++){
      if(inputArray[i] > inputArray[i + 1]){
        tmp = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = tmp;
        sorted = false;
      }
    }
  }
  return inputArray;
}

console.log(bubbler([10,9,8,6,0,7,6,5,4,3,2,1]));