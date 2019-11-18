function divisibleCount(x, y, k) {
  let count = 0;
  while (x <= y) {
    if (x % k === 0) count++;
    x++;
  }
  return count;
}

// above is inefficient for large number spans
// better solution
function divisibleCount(x, y, k) {
  return Math.floor(y / k) - Math.floor((x - 1) / k);
}
