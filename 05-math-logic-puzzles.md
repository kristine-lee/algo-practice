
##From "Cracking the Coding Interview"

-6.1
Because one can only use the scale once, there must be a way to differentiate among different pill bottles. The fact that there are 20 pill bottles immediately lends to the idea of indices. With the given problem, one can visualize the "index" of different pill bottles by placing different number of pills on the scale from 1 to 20 -- i.e. 1 pill from pill bottle #1, 2 pills from pill bottle #2, and so on.

Next up, one would need to find a way to differentiate the sum of 1.0g pills and the sum of 1.1g pills. Because there are 2 choices -- between 1.0g pills and 1.1g pills -- utilizing a binary search tree was the most immediate method that came to my mind. However, a binary search tree would be unsuitable for this problem, as one can only use the scale once; using a BST would necessitate that one can use the scale more than once.

One can subtract the weight of 1.0g pills from the total weight to get the weight of the 1.1g pills to the tenths; as 1.1 - 1.0 = 0.1. As the combined weight of 1.0g pills would stay constant, one can conclude that it can be subtracted from the total weight to get the weight of the 1.1g pills to the tenths. The summation of 1 to 20 is (20 * (20 + 1))/2 = 210. Therefore, the weight of the 1.1g pills(x) is total - 210. x * 10 = index of the pill bottle.
