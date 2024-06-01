var isIsomorphic = function (s, t) {
  let indexer = 1;

  s.split("");
  t.split("");

  const firstArr = [];
  const secondArr = [];

  console.log(firstArr, secondArr, s, t);

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      indexer = 1;
      firstArr.push(indexer);
    }
    if (s[i] === s[i + 1]) {
      indexer = 0;
      firstArr.push(indexer);
    }
  }

  indexer = 1;

  if (firstArr.join("") === secondArr.join("")) return true;

  return false;
};

console.log(isIsomorphic("paper", "title"));
4;
