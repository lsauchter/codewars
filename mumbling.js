function accum(str) {
  const letters = str.split("");
  let results = [];
  for (let i = 0; i < letters.length; i++) {
    const firstLtr = letters[i].toUpperCase();
    const otherLtrs = letters[i].toLowerCase().repeat(i);
    const newLtrs = firstLtr + otherLtrs;
    results.push(newLtrs);
  }
  const final = results.join("-");
  return final;
}

//shortened version
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
