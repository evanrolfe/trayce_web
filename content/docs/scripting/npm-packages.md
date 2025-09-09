---
title: NPM Packages
weight: 4
prev: docs/scripting/variables
---

Trayce comes with a set of commonly used NPM packages built-in. But also lets you install your own packages in collections.

{{<callout type="warning" >}}
Trayce supports CommonJS syntax require for importing libraries. ES Modules import/export are not supported at this time.
{{</callout>}}

## Inbuilt Packages

Below is the list of inbuilt libraries available:

- [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [atob](https://www.npmjs.com/package/atob) -  Turn base64-encoded ascii data back to binary.
- [btoa](https://www.npmjs.com/package/btoa) -  Turn binary data to base64-encoded ascii.
- [chai](https://www.npmjs.com/package/chai) -  BDD/TDD assertion library for node.js and the browser.
- [moment](https://momentjs.com) -  Parse, validate, manipulate, and display dates and times in JavaScript.
- [uuid](https://www.npmjs.com/package/uuid) -  For the creation of RFC4122 UUIDs.
- [nanoid](https://www.npmjs.com/package/nanoid) - A tiny, secure, URL-friendly, unique string ID generator for JavaScript.
- [crypto-js](https://www.npmjs.com/package/crypto-js) - JavaScript library of crypto standards.
- [tv4](https://www.npmjs.com/package/tv4) - Tiny Validator for JSON Schema v4.
- [node-fetch](https://www.npmjs.com/package/node-fetch) - A light-weight module that brings Fetch API to Node.js.
- [lodash](https://lodash.com) -  A modern JavaScript utility library delivering modularity, performance & extras.
- [ajv](https://www.npmjs.com/package/ajv) - Ajv JSON schema validator.
- [cheerio](https://www.npmjs.com/package/cheerio) - Library for parsing and manipulating HTML and XML.
- [xml2js](https://www.npmjs.com/package/xml2js) - Simple XML to JavaScript object converter for Node.js.

Here's an example demonstrating how to use the **chai** library:

```js copy
const chai = require('chai');

const { expect } = chai;

function add(a, b) {
  return a + b;
}

const result = add(2, 3);

expect(result).to.equal(5);

console.log('Test passed!');
```
You can include this code in a pre-request script to test it out.

## External Packages

To load your own external packages, you must initialize a `package.json` file, you can do this by running this within a collection folder.
```
npm init -y
```

If you run this in a collection called `collection1` then the resulting folder structure will be something like:
{{< filetree/container >}}
  {{< filetree/folder name="collection1" >}}
    {{< filetree/folder name="api-folder" state="closed" >}}
      {{< filetree/file name="details.bru" >}}
    {{< /filetree/folder >}}
    {{< filetree/folder name="node_modules" state="closed" >}}
    {{< /filetree/folder >}}
    {{< filetree/file name=".gitignore" >}}
    {{< filetree/file name="bruno.json" >}}
    {{< filetree/file name="package.json" >}}
    {{< filetree/file name="package-lock.json" >}}
    {{< filetree/file name=".env" >}}
  {{< /filetree/folder >}}
{{< /filetree/container >}}

You can then add packages as you normally would in a NodeJS project by running `npm add <package_name>`.
