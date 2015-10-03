import fs from 'fs';
import path from 'path';
import test from 'ava';

test('Should prepend newlines with a `<br>`', t => {
	const result = fs.readFileSync(path.join(__dirname, 'tmp/fixture.txt'));

	t.is(result.toString(), 'foo<br>\nbar<br>\n');
	t.end();
});
