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
};

const eqObjects = function(object1, object2) {
  const keysOfObject1 = Object.keys(object1);
  const keysOfObject2 = Object.keys(object2);
  if (keysOfObject1.length !== keysOfObject2.length) {
    return false;
  }
  for (const objectKey of keysOfObject1) {
    if (Array.isArray(object1[objectKey]) && Array.isArray(object2[objectKey])) {
      const resultOfEqArrays = eqArrays(object1[objectKey], object2[objectKey]);
      return resultOfEqArrays;// optionally, line 42 and 43 can be done in a single line instead (if you wish to do this, replace line 42 and 43 with): return eqArrays(object1[objectKey], object2[objectKey])
    }
    else if (object1[objectKey] !== object2[objectKey]) {
      return false;
    }
  } return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "5", d: "2" };


assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, cd);
