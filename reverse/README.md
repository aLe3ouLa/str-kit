# reverse

> Reverses a string

## Usage

```javascript
var reverse = require( '@ale3oulaa/str-kit/reverse' );
```

#### reverse ( str )

Reverses a `string`.

```javascript

var out = reverse( 'Hidden Treasures' );
// returns 'serusaerT neddiH'

out = reverse( 'Lorem ipsum 𝌆 dolor sit ameͨ͆t.' );
// returns '.teͨ͆ma tis rolod 𝌆 muspi meroL'
```


## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reverse = require( '@stdlib/string/reverse' );

var str = reverse( 'last man standing' );
// returns 'gnidnats nam tsal'

str = reverse( 'presidential election' );
// returns 'noitcele laitnediserp'

str = reverse( 'javaScript' );
// returns 'tpircSavaj'

str = reverse( 'Hidden Treasures' );
// returns 'serusaerT neddiH'
```


### Usage

```text
Usage: reverse [options] [<string>]


### Examples

```bash
$ reverse foobar
raboof
```
