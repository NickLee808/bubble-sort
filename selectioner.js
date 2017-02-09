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

  for (i = 0; i < inputArray.length; i++){
    let tmp = i, currentMinimum = inputArray[i];

    for (j = i + 1; j < inputArray.length; j++){
      if(inputArray[j] < currentMinimum){
        tmp = j;
        currentMinimum = inputArray[j];
      }
    }

    inputArray[tmp] = inputArray[i];
    inputArray[i] = currentMinimum;
  }

  return inputArray;

};