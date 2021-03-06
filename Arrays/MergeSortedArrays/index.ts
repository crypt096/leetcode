function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;
  while (j >= 0) {
    nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
};