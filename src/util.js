function toIndex (A) {
  let x = {};
  for (let a of A) x [a] = a;
  return x;
}

module.exports = {
  toIndex
};