var twoSum = function (nums, target) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) {
        res.push(i);
        res.push(j);
        return res;
      }
    }
  }
};

console.log(twoSum([3, 1], 6));
