const search = function(nums, target) {
  const index = nums.indexOf(target);
  return index > -1 ? index : -1;
};