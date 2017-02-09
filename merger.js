//jshint esversion:6

module.exports = function merger(inputArray){
  
  if(inputArray instanceof Array === false){
    return `Received ${typeof inputArray} while expecting array`;
  }

  for(i = 0; i < inputArray.length; i++){
    if(typeof inputArray[i] !== 'number'){
      return 'Received incomputable input';
    }
  }

  if (inputArray.length <= 1){
    return inputArray;
  }
  
  let leftArray = merger(inputArray.slice(0, Math.floor(inputArray.length / 2))),
    rightArray = merger(inputArray.slice(Math.floor(inputArray.length / 2)));

  leftArray = merger(leftArray);
  rightArray = merger(rightArray);

  return merge(leftArray, rightArray);

};

function merge(leftArray, rightArray){
  let returnArray = [];

  while(leftArray.length > 0 && rightArray.length > 0 ){
    if (leftArray[0] > rightArray[0]){
      returnArray.push(rightArray[0]);
      rightArray.splice(0, 1);
    }else{
      returnArray.push(leftArray[0]);
      leftArray.splice(0, 1);
    }
  }

  while (leftArray.length > 0){
    returnArray.push(leftArray[0]);
    leftArray.splice(0, 1);
  }

  while (rightArray.length > 0){
    returnArray.push(rightArray[0]);
    rightArray.splice(0, 1);
  }

  return returnArray;

}