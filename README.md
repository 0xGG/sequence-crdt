# sequence-crdt

sequence CRDT

## Installation

```bash
$ npm install sequence-crdt
```

## Usages

Check `example.js` file

```typescript
import { CRDT, randomID, Char } from "sequence-crdt";

// Create CRDT instance
const doc = new CRDT({ siteID: randomID() });
let char: Char;

// Perform local insertion
char = doc.handleLocalInsert(0, "H"); // then broadcast `char` to remote peer
char = doc.handleLocalInsert(1, "i"); // then broadcast `char` to remote peer

// Perform local deletion
char = doc.handleLocalDelete(0); // then broadcast `char` to peer

// ****** Another Peer ******
// Receive insertion `char` from remote peer
crdt.handleRemoteInsert(char);

// Receive deletion `char` from remote peer
crdt.handleRemoteDeletion(char);

// Get text
crdt.text; // or
crdt.populateText();
```

## References

- https://github.com/conclave-team/conclave
- https://hal.archives-ouvertes.fr/hal-00921633/document

## License

MIT
