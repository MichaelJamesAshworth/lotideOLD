const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

//Takeuntil.js code
const takeUntil = function (array, callback) {
  const slicedArray = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      slicedArray.push(item);
    }
  }
  return slicedArray;
};

console.log();
// //expected input
//const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// //expected output
// [ 1, 2, 5, 7, 2 ]
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

//Test Code
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
