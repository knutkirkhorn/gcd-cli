#!/usr/bin/env node
'use strict';
const gcd = require('@knutkirkhorn/gcd');
const meow = require('meow');

const cli = meow(`
        Usage
          $ gcd <number1> <number2>

        Examples
          $ gcd 12 20
          $ gcd 13 234 
`);

const number1 = cli.input[0];
const number2 = cli.input[1];

if (!(number1 && number2)) {
    console.log("You need to specify both numbers.");
    process.exit(1);
}

console.log(gcd(number1, number2));