function findNumbers(nums: number[]): number {
  let elWithEvenNumbers = 0;

  nums.map(
    (num) => num.toString().length % 2 === 0 && (elWithEvenNumbers += 1)
  );

  return elWithEvenNumbers;
}