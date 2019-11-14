function printerError(str) {
  return `${str.replace(/[a-m]/g, "").length}/${str.length}`;
}
