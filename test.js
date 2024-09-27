const { Metadata, AccessCheckChain } = require("./dist/index.js");
let metadata = Metadata.fromJSON({
  name: "sample-typescript-plugin",
  description: "A sample plugin to demonstrate some functionality.",
  version: "0.1.0",
  database: true,
  accessChecks: {
    "OR": [
      { "user": "notmarc" }
    ]
  }
});

console.log(JSON.stringify(metadata));
let json = Metadata.toJSON(metadata);
console.log(JSON.stringify(metadata));
