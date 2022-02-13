
'use strict';

/**
* Remove spaces from a string
*
* @param {string} str - input string
* @throws {TypeError} must provide a string primitive
* @returns {string} string stripped from spaces
*
* @example
* var out = reverse( 'last man standing' );
* // returns 'gnidnats nam tsal'
*
* @example
* var out = reverse( 'presidential election' );
* // returns 'noitcele laitnediserp'
*
* @example
* var out = reverse( 'javaScript' );
* // returns 'tpircSavaj'
*/

function removeSpaces(string) {
  if (typeof string !== "string") {
    throw new TypeError("Function removeWhitespace requires a string");
  }

  return string.replace(/\s/g, "")
}

// EXPORTS //

module.exports = removeSpaces;
