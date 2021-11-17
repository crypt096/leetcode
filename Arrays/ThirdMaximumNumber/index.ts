function thirdMax(nums: number[]): number {
  let [first, second, third] = [-Infinity, -Infinity, -Infinity];
  for (let el of nums) {
    if (el === first || el === second || el === third) {
      continue;
    }
    if (el > first) {
      [first, second, third] = [el, first, second];
      continue;
    }
    if (el > second) {
      [second, third] = [el, second];
      continue;
    }
    if (el > third) {
      third = el;
      continue;
    }
  }
  return third !== -Infinity ? third : first;
};