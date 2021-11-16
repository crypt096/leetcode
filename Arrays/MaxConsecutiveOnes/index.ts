function findMaxConsecutiveOnes(nums: number[]): number {
  if (nums.length === 0) {
  return 0;
}

if (nums.length === 1 && nums[0] === 1) {
  return 1;
}

let maxEl = 0;
let i = 0;

while (i < nums.length) {
  let ones = 0;

  while (i < nums.length && nums[i] === 1) {
    ones++;
    i++;
  }

  maxEl = Math.max(maxEl, ones);
  i++;
}

return maxEl;
  
};