/*
from: https://www.algoexpert.io/questions/Branch%20Sums
Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum
*/
// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	let sumsArr = [];
	let sumOfNodes = 0;
	helper(root, sumOfNodes, sumsArr);
	return sumsArr;
}

function helper(node, sumOfNodes, sumsArr) {
	if (!node) return sumsArr; //edge 1: if the node doesn't exist at all.
	//and you don't wanna call node.value on null lol
	//you can also just do return here

	let newRunningSum = sumOfNodes + node.value;

	if (node.left === null && node.right === null) {
		//edge 2: you're at the leaf node
		sumsArr.push(newRunningSum);
		return sumsArr; //you can also just do return;
	}
	helper(node.left, newRunningSum, sumsArr);
	helper(node.right, newRunningSum, sumsArr);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
