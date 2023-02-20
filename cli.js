#!/usr/bin/env node

import gcd from '@knutkirkhorn/gcd';
import meow from 'meow';

const cli = meow(`
	Usage
	  $ gcd <number1> <number2>

	Examples
	  $ gcd 12 20
	  $ gcd 13 234
`, {importMeta: import.meta});

const number1 = cli.input[0];
const number2 = cli.input[1];

if (!(number1 && number2)) {
	console.log('You need to specify both numbers.');
	process.exit(1);
}

console.log(gcd(number1, number2));
