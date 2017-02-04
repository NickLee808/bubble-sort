//jshint esversion:6

module.exports = function(inputArray){

  if(inputArray instanceof Array === false){
    return `Received ${typeof inputArray} while expecting array`;
  }

  for(i = 0; i < inputArray.length; i++){
    if(typeof inputArray[i] !== 'number'){
      return 'Received incomputable input';
    }
  }

  let sorted = false;

  while(sorted === false){
    sorted = true;
    for(i = 0; i < inputArray.length; i++){
      if(inputArray[i] > inputArray[i + 1]){
        tmp = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = tmp;
        sorted = false;
      }
    }
  }
  return inputArray;
};