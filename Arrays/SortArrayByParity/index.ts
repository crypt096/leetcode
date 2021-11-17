function sortArrayByParity(nums: number[]): number[] {
  let idx = 0;
  let oddArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      oddArr[idx++] = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      oddArr.push(nums[i]);
    }
  }
  
    return oddArr;
  };