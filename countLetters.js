const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentance) {
  const letterCount = {};
  for (const element of sentance) {
    if (letterCount[element]) {
      letterCount[element]++;
    } else if (element !== ' ') {
      letterCount[element] = 1;
    }
  }
  console.log(letterCount);
  return letterCount;
};

//test code
assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1
})  ;
