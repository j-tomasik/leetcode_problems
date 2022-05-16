// The question was you have a binary tree that represents a string where internal nodes have a length of the string. 
// Leaves nodes contain the part of the string and the length of that part. 
//So given an n index return that char from the tree.
// for example if the string is ‘abcdef’. the root node will have value of length =7;

// i forgot to mention the internal nodes can have a left or right where the string is split.
// for the above example root.left might be ‘a’, length 1 and root right is length 5. 
//root.right doesn’t have a string since it’s subdivided more on that side

// the root.right might have a left of ‘bc’ length 2 and right of ‘def’ length 3

// so if you’re given n of 4, you have to travel down the tree to find the value of of ‘e’
// on thing i didn’t realize until he told me was that i should define the node class myself

// i was thinking it was like leetcode where they tell you what the node has, but he told me to define it later
// i was trying to solve it the non-optimal way so my questions where how i can make it better
// like i could can take advantage of the lengths given of the 
//interval nodes to travel to the specific substring 
//instead of transversing of all it to build the str from left to right