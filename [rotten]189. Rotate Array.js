var rotate = function (nums, k) {
  if (k > nums.length) {
    if (nums.length < 2) return nums;

    nums.pop();
    nums.unshift(nums[nums.length - 1]);
    return nums;
  }

  const elemsToPush = nums.slice(nums.length - k, nums.length).reverse();

  console.log(elemsToPush);

  for (let i = 0; i < k; i++) {
    nums.pop();
  }

  for (let i = 0; i < k; i++) {
    nums.unshift(elemsToPush[i]);
  }

  return nums;
};

console.log(rotate([1, 2], 3));
