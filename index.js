module.exports = function removeWhitespace(string) {
  if (typeof string !== "string") {
    throw new TypeError("Function removeWhitespace requires a string");
  }

  return string.replace(/\s/g, "")
}
