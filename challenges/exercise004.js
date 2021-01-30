function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter(x => x < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  return names.filter(x => x.charAt(0).toUpperCase() === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  return words.filter(x => x.substring(0, 3).toUpperCase() == "TO ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter(x => Number.isInteger(x));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  return users.map(x => x.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.map(x => Number(Math.sqrt(x).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  var myReg = new RegExp(str.toUpperCase());
  return sentences.filter(x => x.toUpperCase().match(myReg));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
