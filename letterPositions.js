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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}

const letterPositions = function(sentence) {
  const results = {}; //variable to store the results
  for (let i = 0; i < sentence.length; i++) { //Created a for loop (since we need to reference the index)
    const letter = sentence[i]; //Here, we're just reassigning the character of the string (sentance[i]) to a nicer name, called Letter
    if (letter !== ' ') { //conditional statement saying if the the character contains a space
      if (results[letter] !==undefined) { //conditional statement saying if the key exists, execute next ine of code
        results[letter].push(i); //This line of code says we're going to push the index, a.k.a .push(i) to the object key. We use .push here since we're dealing with an array
      } else {results[letter] = [i]} //This line of code basically says, if the object key doesn't exist, create it 
    }
  }
  return results;
};

//Test Code
assertArraysEqual(letterPositions("hello").e, [1]);