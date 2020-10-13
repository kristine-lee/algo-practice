/*from https://leetcode.com/problems/two-sum/ */
/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

function twoSum(array, target){
  let results = [];
  if (array.length === 2){
    return [0,1]
  } else {
    for (let i = 0; i < array.length; i++) {
      let x = target - array[i]
      for (j = i+1; j < array.length; j++) {
        if (x === j) {
          results.push(i, j)
          return results
        }
      }
    }
  }
}
// console.log(twoSum([3,2,4], 6))

function twoSumHashMap(arr, target){
  let hashMap = {};
  for(let i=0; i < arr.length; i++){
    let key = arr[i];
    hashMap[key] = i
  }
  for(let i=0; i < arr.length; i++){
    let diff = target - arr[i];
    if (hashMap.hasOwnProperty(diff) && hashMap[diff] !== i) {
      return [i, hashMap[diff]] //hashMap[diff] would be the j
    }
  }
}

//console.log(twoSumHashMap([3,2,4], 6))

//brute force: find all pairs and see if they add up to target
//more efficient: using a hash map

