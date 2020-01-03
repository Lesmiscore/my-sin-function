const funcs = [x => x, require("./sin"), Math.sin];

const PRECISE = 1000;
const MAX = Math.PI * 5;
for (let i = 0; i <= PRECISE; i++) {
  const value = (i * MAX) / PRECISE;
  console.log(funcs.map(a => a(value)).join(" "));
}
