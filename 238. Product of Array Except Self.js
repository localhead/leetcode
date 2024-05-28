var productExceptSelf = function (nums) {
  const toRight = []; // [24, 12, 4 , 1]
  const toLeft = []; // [1 , 1 , 2 , 6]

  const res = [];

  let multiplierLeft = 1;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      toLeft.push(1);
      continue;
    }

    multiplierLeft = multiplierLeft * nums[i - 1];

    toLeft.push(multiplierLeft);
  }

  let multiplierRight = 1;
  //[24, 12, 4 , 1]

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log(i);
    if (i === nums.length - 1) {
      toRight.push(1);
      continue;
    }

    multiplierRight = multiplierRight * nums[i + 1];

    toRight.push(multiplierRight);
  }
  //console.log(toLeft, toRight);

  for (let i = 0; i < toLeft.length; i++) {
    res.push(toLeft[i] * toRight[toRight.length - i - 1]);
  }

  return res;

  return toLeft.map((item, index) => {
    return item * toRight[toRight.length - index - 1];
  });
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
