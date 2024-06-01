var isSubsequence = function (s, t) {
  const toArrFirst = s.split("");
  const toArrSecond = t.split("");

  const res = [];

  let j = 0;

  for (let i = 0; i < toArrSecond.length; i++) {
    if (toArrSecond[i] === toArrFirst[j]) {
      res.push(toArrSecond[i]);
      j++;
    }
  }

  if (res.join("") === s) return true;

  return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
