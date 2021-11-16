function sortedSquares(nums: number[]): number[] {
  return nums.map((el) => Math.pow(Math.abs(el), 2)).sort((a,b) => a - b);
};