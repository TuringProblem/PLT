/**
 * @author: TuringProblem
 *
 **/
// sliding window 
// sliding window 
var longestPalindrome = function (s) {
    if (!s || s.length < 1)
        return "";
    // these are the two pointers for the window
    var start = 0;
    var end = 0;
    var movingWindow = function (right, left) {
        while (right >= 0 && left < s.length && s[right] === s[left]) {
            console.log("left side: ".concat(left, " right side: ").concat(right));
            left--;
            right++;
        }
        return right - left - 1;
    };
    for (var i = 0; i < s.length; ++i) {
        var len1 = movingWindow(i, i);
        var len2 = movingWindow(i, i + 1);
        console.log("len1: ".concat(len1, " len2: ").concat(len2));
        var maxLength = Math.max(len1, len2);
        console.log("maxLength: ".concat(maxLength, "\n"));
        if (maxLength > end - start) {
            console.log("end-start: ".concat(end - start, " && maxLength: ").concat(maxLength, " && i: ").concat(i));
            start = i - Math.floor((maxLength - 1) / 2);
            end = i + Math.floor(maxLength / 2); // 
            console.log("end: ".concat(end, ", start: ").concat(start, "\n"));
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
var main = function () {
    var tests = [
        "babad",
        "cbbd"
    ];
    var outputs = tests.map(function (x) { return longestPalindrome(x); });
    console.log(outputs);
};
main();
