const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//WHAT DO WE WANT
//FUNCTION THAT TAKES IN AN OBJECT AND A VALUE
//scan the object
//return the first key that containts the given value
//if no key with given value is found, return undefined

//HOW TO ACHIEVE WHAT WE WANT
//iterate over the object (need a loop)
//create a variable

//Compass object
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//Object I created for testing
const myCoolObject = {
    favoriteFood: "Pizza",
    favoriteActor: "Tom Hanks"
};

const findKeyByValue = function (objectToBeScanned, value) {
  const array = Object.keys(objectToBeScanned)
  for (const objectKey of array) {
    if (objectToBeScanned[objectKey] === value) { //objectKey in this situation is the key/value pair.
      return objectKey;
    } 
  }
  return undefined;
};
console.log(findKeyByValue(bestTVShowsByGenre))






//Test Code
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(myCoolObject, "Tom Hanks"), "favoriteActor");