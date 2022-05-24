// Given a shelf (array) of numbers, your job is to find the maximum total score 
//possible given only K amount of turns.
// You can only select numbers from the far left or far right of the array
// Example
// [2, 23, 4, 17, 7], K = 2; expected output => 25
// We first grab the far left, and then far left again, resulting in the highest possible total of 25





function maxShelfFormLeftAndRight(
  shelf,
  t,
  left = 0,
  right = shelf.length - 1,
  memo = {}
) {
  const key = `${t}, ${left}, ${right}`;
  if (t === 0) return 0;
  if (key in memo) return memo[key];

  const takeLeft =
    shelf[left] + maxShelfFormLeftAndRight(shelf, t - 1, left + 1, right, memo);
  const takeRight =
    shelf[right] +
    maxShelfFormLeftAndRight(shelf, t - 1, left, right - 1, memo);

  memo[key] = Math.max(takeLeft, takeRight);
  return memo[key];
}