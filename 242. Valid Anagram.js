var isAnagram = function (s, t) {
  function deleteSpaces(array) {
    const res = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i].charCodeAt() !== 32) res.push(array[i].charCodeAt());
    }

    return res;
  }

  const toStrFirst = deleteSpaces(s.split(""));
  const toStrSecond = deleteSpaces(t.split(""));
  toStrFirst.sort((a, b) => a - b);
  toStrSecond.sort((a, b) => a - b);

  if (toStrFirst.join("") === toStrSecond.join("")) return true;
  //console.log(toStrFirst.join(""));
  //console.log(toStrSecond.join(""));

  return false;
};

isAnagram("anagr  am", "nagaram");
