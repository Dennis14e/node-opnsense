# Node OPNsense Client API (node-opnsense)

![Lint](https://github.com/Dennis14e/node-opnsense/workflows/Lint/badge.svg)


## Example

```javascript
const OPNsense = require('./src/index');

const client = new OPNsense.Client(
    'https://opnsense.local/',
    'api-key',
    'api-secret'
);

new OPNsense.Wol.WolClient(client).wakeByMAC('AA:BB:CC:00:11:22').then(res => {
    console.log(res);
});
```
