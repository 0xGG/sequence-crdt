const { CRDT, randomID } = require("./build/src/index");

// Peer A
const docA = new CRDT({ siteID: randomID() });
const char1 = docA.handleLocalInsert(0, "H");
const char2 = docA.handleLocalInsert(1, "i");
console.log(docA.text); // => Hi

// Peer B
const docB = new CRDT({ siteID: randomID() });
docB.handleRemoteInsert(char1);
docB.handleRemoteInsert(char2);
console.log(docB.text); // => Hi

// Peer A
const char3 = docA.handleLocalInsert(1, "a");
console.log(docA.text); // => Hai
const char4 = docA.handleLocalDelete(1);
console.log(docA.text); // => Hi

// Peer B
docB.handleRemoteDelete(char4); // => Hi
console.log(docB.text);
docB.handleRemoteInsert(char3); // => Hi
console.log(docB.text);
