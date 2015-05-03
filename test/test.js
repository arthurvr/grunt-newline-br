'use strict';
var fs = require('fs');
var path = require('path');
var assert = require('assert');

it('Should prepend newlines with a `<br>`', function () {
	var result = fs.readFileSync(path.join(__dirname, 'tmp/fixture.txt'));
	assert.equal(result.toString(), 'foo<br>\nbar<br>\n');
});
