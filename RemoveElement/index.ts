function removeElement(nums: number[], val: number): number {
  let foundAt = nums.indexOf(val);
  while(foundAt !== -1){
      nums.splice(foundAt, 1);
      foundAt = nums.indexOf(val);
  };
  return nums.length;
};