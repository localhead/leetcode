var rotate = function (s, t) {
  const execute = (arr) => {
    let backspaces = 0;

    const resArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "#") {
        backspaces++;
        continue;
      }

      if (backspaces !== 0) {
        backspaces--;
        continue;
      }

      resArr.push(arr[i]);
    }

    return resArr;
  };

  const firstArr = s.split("").reverse();
  const secondArr = t.split("").reverse();

  const firstTake = execute(firstArr);
  const secondTake = execute(secondArr);

  if (firstTake.join("") === secondTake.join("")) return true;

  return false;
};

console.log(rotate("ab##", "c#d#"));
