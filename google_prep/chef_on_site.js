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