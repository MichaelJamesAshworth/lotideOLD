//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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
};

//Test variables for primitives as value
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// const abc = { a: "1", b: "2", c: "3" };
//Test variables for Arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

//eqObjects Function
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

//assertEqual(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, abc));
assertEqual(eqObjects(cd, dc), true);//This should return true, and your assertion should pass if your function(s) are working as intended
assertEqual(eqObjects(cd, cd2), false);//This should return