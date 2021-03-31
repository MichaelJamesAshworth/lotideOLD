//eqArrays function
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } 
  for (i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } 
  return true;
}

//assertArraysEqual function
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}

const middle = function(array) {
  const elementReturn = []
  if (array.length < 2) {
    return [];
  }
  const middleIndex = Math.floor(array.length / 2)
  if (array.length % 2 !== 0) {
    const middleElement = array[middleIndex]
    return [middleElement]
  }
  else {
    const firstMiddleElement = array[middleIndex - 1]
    const secondMiddleElement = array[middleIndex]
    return [firstMiddleElement, secondMiddleElement]
  }
}
//Use the below code to run a test with the assertArraysEqual function
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
