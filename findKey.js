const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(objectToBeScanned, callback) {
  const array = Object.keys(objectToBeScanned);
  for (const objectKey of array) {
    if (callback(objectToBeScanned[objectKey])) { //This line of code is essentially checking the value of the input object. If the value is truthy, return the key to that value pair.
      return objectKey;
    }
  }
  return undefined;
};

//Test Code
const testObject = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual(testObject, "noma");
