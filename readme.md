# grunt-newline-br [![Build Status](https://travis-ci.org/arthurvr/grunt-newline-br.svg?branch=master)](https://travis-ci.org/arthurvr/grunt-newline-br)

> Prepend a `<br>` tag before newlines using [newline-br](https://www.npmjs.com/package/newline-br)


## Install

```
$ npm install --save grunt-newline-br
```


## Usage

```js
module.exports = function (grunt) {
	grunt.initConfig({
		newlineBr: {
			test: {
				files: {
					'test/tmp/fixture.txt': 'test/fixture.txt'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-newline-br');
};
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
