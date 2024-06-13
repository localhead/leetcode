var isHappy = function (n) {
  function getArrayOfNumbers(n) {
    const arrOfStr = n.toString().split("");
    const res = arrOfStr.map((item) => {
      return Number(item);
    });
    return res;
  }

  const initArr = getArrayOfNumbers(n);

  //console.log(initArr);

  let initRes = 0;

  function recursion(arr, res) {
    if (res === 1) {
      return true;
    } else {
      res = 0;
    }
    const newArr = arr.map((item) => {
      return Math.pow(item, 2);
    });

    for (let i = 0; i < newArr.length; i++) {
      res = res + newArr[i];
    }
    //console.log(res);

    const newInitArr = getArrayOfNumbers(res);

    //console.log(newArr, newInitArr);

    if (res === 1) return true;

    if (res === 4) return false;

    return recursion(newInitArr);
  }

  const final = recursion(initArr, initRes);

  return final;
};

isHappy(2);
