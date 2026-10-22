function sortColors(nums: number[]): void {
  let freq = new Array<number>(3).fill(0);
  for (let i = 0; i < nums.length; ++i) {
    freq[nums[i]]++;
  }

  let counter: number = 0;
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < freq[j]; ++j) {
      nums[counter] = i;
      counter++;
    }
  }
  console.log(freq);
}


