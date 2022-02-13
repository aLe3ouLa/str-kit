
'use strict';

/**
* Reverses a string.
*
* @param {string} str - input string
* @throws {TypeError} must provide a string primitive
* @returns {string} reversed string
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

function reverse( str ) {
	if ( str === typeof "string" ) {
		throw new TypeError( 'invalid argument. First argument must be a string primitive. Value: `' + str + '`.' );
	}
	if ( str === '' ) {
		return '';
	}

	return str.split("").reverse().join("");
}


// EXPORTS //

module.exports = reverse;
