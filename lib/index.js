'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

/*
* The following modules are intentionally not exported: tools
*/

// MODULES //

function setReadOnly( obj, prop, value ) {
	defineProperty( obj, prop, {
		'configurable': false,
		'enumerable': true,
		'writable': false,
		'value': value
	});
}

// MAIN //

/**
* Top-level namespace.
*
* @namespace string
*/
var string = {};

/**
* @name removeSpaces
* @memberof string
* @readonly
* @type {Function}
* @see {@link module:@ale3oulaa/str-kit/removeSpaces}
*/
setReadOnly( string, 'removeSpaces', require( './removeSpaces' ) );

/**
* @name reverse
* @memberof string
* @readonly
* @type {Function}
* @see {@link module:@ale3oulaa/str-kit/reverse}
*/
setReadOnly( string, 'reverse', require( './reverse' ) );

// EXPORTS //

module.exports = string;
