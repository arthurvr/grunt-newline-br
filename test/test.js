'use strict';
var fs = require('fs');
var path = require('path');
var test = require('ava');

test('Should prepend newlines with a `<br>`', function (t) {
	var result = fs.readFileSync(path.join(__dirname, 'tmp/fixture.txt'));
	t.is(result.toString(), 'foo<br>\nbar<br>\n');
	t.end();
});
