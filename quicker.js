//jshint esversion:6

module.exports = function quicker(inputArray){
  
  if(inputArray instanceof Array === false){
    return `Received ${typeof inputArray} while expecting array`;
  }

  for(i = 0; i < inputArray.length; i++){
    if(typeof inputArray[i] !== 'number'){
      return 'Received incomputable input';
    }
  }

  if(inputArray.length === 0){
    return [];
  }

  let leftArray = [], rightArray = [];
  let pivot = inputArray[Math.floor(inputArray.length / 2)];
  inputArray.splice(Math.floor(inputArray.length / 2), 1);

  inputArray.forEach(num => (pivot > num) ? (leftArray.push(num)) : (rightArray.push(num)));

  if(leftArray.length > 1){
    leftArray = quicker(leftArray);
  }

  if(rightArray.length > 1){
    rightArray = quicker(rightArray);
  }

  return leftArray.concat(pivot, rightArray);
};