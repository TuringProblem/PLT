/**
 * @author: TuringProblem  
 *
 **/


// two pointer, expand around center
const longestPalindrome = (s: string): string => {
  if (!s || s.length < 1) return "";
  let start: number = 0;
  let end: number = 0;


  const movingWindow = (right: number, left: number) => {
    while (right >= 0 && left < s.length && s[left] === s[right]) {
      console.log(`left side: ${left} right side: ${right}`);
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; ++i) {
    let len1 = movingWindow(i, i);
    let len2 = movingWindow(i, i + 1);
    console.log(`len1: ${len1} len2: ${len2}`);
    let maxLength: number = Math.max(len1, len2);
    console.log(`maxLength: ${maxLength}\n`);

    if (maxLength > end - start) {
      console.log(`end-start: ${end - start} && maxLength: ${maxLength} && i: ${i}`);
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2); // 
      console.log(`end: ${end}, start: ${start}\n`);

    }
  }


  return s.substring(start, end + 1);
};


/**
Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*
**/
const main = () => {
  const tests: string[] = [
    "babad",
    "cbbd"
  ]
  const outputs: string[] = tests.map(x => longestPalindrome(x));
  console.log(outputs);
}


main();
