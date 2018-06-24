# enbuffer
Storage of object references pointing to uuid/version data objects, in-memory eventing database.


```JavaScript

enbuffer.set('My Documents', {uuid: 'a.txt', version: 1});
enbuffer.set('My Documents', {uuid: 'a.txt', version: 2});
enbuffer.set('My Documents', {uuid: 'b.txt', version: 1});
enbuffer.set('windows', {uuid: 'win.exe', version: 1});

const actual = enbuffer.all('My Documents' )
const expected = [ { uuid: 'a.txt', version: 2 }, { uuid: 'b.txt', version: 1 } ];

```
