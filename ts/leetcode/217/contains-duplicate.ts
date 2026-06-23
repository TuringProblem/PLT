const containsDuplicate = (nums: number[]): boolean => {
  const set = new Set<number>(nums);
  const newArray = Array.from(set)

  return nums.length === newArray.length ? false : true;
}

const tests = [
  [1, 2, 3, 4, 5, 1], // false
  [1, 2, 3, 4, 5], // true 
  [1, 2, 2, 4, 5], // false 
]

const outputs = tests.filter((x) => containsDuplicate(x));

console.log(outputs)

