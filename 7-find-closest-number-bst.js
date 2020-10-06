/* from https://www.algoexpert.io/questions/Find%20Closest%20Value%20In%20BST */
//Write a function that takes in a BST and a target integer value and returns the closest value to that target value contained in the BST

function findClosestValueInBst(tree, target) {
	return helper(tree, target, tree.value)
}
function helper(tree, target, closestValue) {
	if (tree === null) return closestValue;
	if (Math.abs(target - closestValue) > Math.abs(target - tree.value)) {
		closestValue = tree.value; //compares the difference between the target & the value of the node we're on vs. the existing closestValue. If the difference between the current node and target is smaller than that the existing closestValue, then the value of the current node gets reassigned to closestValue.
	}
	if (target > tree.value) return helper(tree.right, target, closestValue);
	if (target < tree.value) return helper(tree.left, target, closestValue);
	return closestValue; //if neither of these 2 are true, then tree.value, which has already been reassigned to closestValue, can just be returned as target = tree.value;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
