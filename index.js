#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));

var filename = argv.f;
if (!filename) {
	console.log('node index.js -f {filename}');
} else {
	require('./getImage')(argv.f);
}
