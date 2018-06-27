const assert = require('assert');
const enbuffer = program = require('./index.js')();

enbuffer.set('My Documents', {uuid: 'a.txt', version: 1});
enbuffer.set('My Documents', {uuid: 'a.txt', version: 2});
enbuffer.set('My Documents', {uuid: 'b.txt', version: 1});
enbuffer.set('My Documents', {uuid: 'c.txt', version: 18, deleted: true});
enbuffer.set('windows', {uuid: 'win.exe', version: 1});

const actual = enbuffer.all('My Documents' )
const expected = [ { uuid: 'a.txt', version: 2 }, { uuid: 'b.txt', version: 1 } ];

assert.deepEqual( actual , expected );
