var wordPattern = function (pattern, s) {
  const patternArr = pattern.split("");
  const wordArr = s.split(" ");

  if (wordArr.length !== patternArr.length) return false;

  const patternFiltered = getNonDuplicatesArr(patternArr);
  const wordsFiltered = getNonDuplicatesArr(wordArr);

  // console.log(patternFiltered, wordsFiltered);

  function getNonDuplicatesArr(arr) {
    const res = [];
    let i = 0;
    while (i < arr.length) {
      if (!res.includes(arr[i])) {
        res.push(arr[i]);
      }
      i++;
    }

    return res;
  }

  let obj = new Object();

  for (let i = 0; i < wordsFiltered.length; i++) {
    obj = { ...obj, [patternFiltered[i]]: wordsFiltered[i] };
  }

  const myWords = [];

  for (let i = 0; i < patternArr.length; i++) {
    myWords.push(obj[patternArr[i]]);
  }

  // console.log(obj, myWords);

  if (myWords.join(" ") === s) return true;

  return false;
};

console.log(wordPattern("abba", "dog cat cat dog"));
