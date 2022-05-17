// Write a function named longestCommonPrefix to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
 
// Input: strs = [“flower”, “flow”, “flight”]                             Output: “fl”

// Input: strs = [“dog”, “racecar”, “car”]                               Output: “”

// Pseudocode:
// //start with an array of strings
// //result string instantiated as empty string
// 	//compare all strings to each other
// 		If i compare just 2 of them, i end jp with a string that is longer than correct result
// 			//compare with empty string
// 			//if char in entry string doesnt exist, add it from whatever string im on
// 				//compare with the rest of the chars
// 				//move on to next string when i encounter a different character


// Const longestCommonPrefix = (arr) => {
// 	If (!arr.length) return “”;
// 	Const res = arr[0];


// 	For (let i = 1; i < arr.length; i ++) {
// 		Const str = arr[i];
// 		For (let charidx = 0; charidx < res.length; charIdx++) {
// 			If (res[charidx] !== str[charidx]) {
// 				res = res.slice(0, charidx);
// 				break;
// }
// }
// If (res.length > str.length) {
// 	res.slice(0, str.length - 1);
// }
// }

// 	Return res;
// } 

// Input: strs = [“flower”, “flow”, “flight”]
// Res = fl
// Str = flight
// Res[charidx] =o
// Str[charidx = i


// Output: “fl”		
