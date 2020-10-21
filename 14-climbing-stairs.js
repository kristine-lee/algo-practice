/*
from: https://leetcode.com/problems/climbing-stairs
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
let cache = {};
var climbStairs = function(n) {
    if (n <= 3) return n;
    if (n in cache) return cache[n];
    else {
        cache[n] = climbStairs(n-2) + climbStairs(n-1);
        return cache[n];
    }
}
