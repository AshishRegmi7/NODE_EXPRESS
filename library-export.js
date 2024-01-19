//Write a js library and export it to  library-index file.
//Library should contain add and multiply function.
//Write a js function that uses proper-uppper-case npm package to convert into proper case
const toProperCase = require("proper-upper-case");
const add = (a, b) => a + b;
const multi = (a, b) => a * b;

const proper = (string) => {
  return toProperCase(string);
};

module.exports = { add, multi, proper };