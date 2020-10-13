/* from: https://www.algoexpert.io/questions/Validate%20Subsequence
  Given 2 non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the 1st one
*/

function isValidSubsequence(array, sequence) {
	let x = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[x]){
			x = x + 1
		}
	}
	return x === sequence.length;
}
