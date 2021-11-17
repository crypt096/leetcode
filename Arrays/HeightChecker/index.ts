function heightChecker(heights: number[]): number {
  let output = 0;

  let expectedArr = heights.slice(0, heights.length);
  expectedArr.sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expectedArr[i]) {
      output++;
    }
  }

  return output;
};