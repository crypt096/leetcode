function isPalindrome(x: number): boolean {
  let num = x.toString();
  let reversedNum = num.split("").reverse().join("");
  return num === reversedNum;
};