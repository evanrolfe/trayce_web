---
title: Variables
weight: 4
prev: docs/sending-requests/graphql/variables/
next: docs/variables/environment-variables
---

Variables allow you to store dynamic values that can be reused across multiple API requests, environments, and workflows. This feature enhances flexibility, maintainability, and efficiency by enabling you to manage frequently changing data points such as tokens, environment-specific URLs, or user-defined values in one place.

### Types

There are 6 types of variables you can create:

- [Global Environments Variables](./global-environment-variables)
- [Environment Variables](./environment-variables)
- [Collection Variables](./collection-variables)
- [Folder Variables](./folder-variables)
- [Request Variables](./request-variables)
- [Runtime Variables](./runtime-variables)

Additionally, Process Environment Variables can be defined in an external environment configuration file:

- [Process Environment Variables](./process-environment-variables)

### Variable Precedence and Scope

When a variable is accessed, the following precedence is used to determine which value is used:

<div class="flex justify-center mt-8 w-full">
      <div style={{ paddingRight: '10px' }}>↑ Higher Precedence</div>
      <div style={{ paddingRight: '10px' }}>↓ Lower Precedence</div>

  <div class="flex flex-col items-center space-y-2" style="">
    <div class="font-bold text-white px-4 py-2 rounded-md text-center" style="background-color: #6CB4AD; width: 200px; margin: 0 auto;">
      Runtime Variables
    </div>
    <div class="text-white px-4 py-2 rounded-md text-center" style="background-color: #7BC4BD; width: 240px; margin: 0 auto;">
      Request Variables
    </div>
    <div class="text-white px-4 py-2 rounded-md text-center" style="background-color: #8ACDCE; width: 280px; margin: 0 auto;">
      Folder Variables
    </div>
    <div class="text-black px-4 py-2 rounded-md text-center" style="background-color: #99D6DF; width: 320px; margin: 0 auto;">
      Environment Variables
    </div>
    <div class="text-black px-4 py-2 rounded-md text-center" style="background-color: #A8DFF0; width: 360px; margin: 0 auto;">
      Collection Variables
    </div>
    <div class="text-black px-4 py-2 rounded-md text-center" style="background-color: #B7E8F1; width: 400px; margin: 0 auto;">
      Global Variables
    </div>
  </div>
</div>

Runtime variables get the highest precedence. Process Environment Variables are accessed using the `{{process.env.VAR_NAME}}` syntax and hence don't compete with the above.

### Variable Storage

Each variable has its own storage location either within your collection file or within the app's memory. **All storage is local.**

<div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }}>
  <table style={{ borderCollapse: 'collapse', width: '600px', fontFamily: 'sans-serif', border: '1px solid #ddd' }}>
    <thead>
      <tr style={{ backgroundColor: '#f4aa4a', color: 'white' }}>
        <th style={{ textAlign: 'left', padding: '8px', border: '1px solid #ddd', width: '50%' }}>Variable Type</th>
        <th style={{ textAlign: 'left', padding: '8px', border: '1px solid #ddd', width: '50%' }}>Storage Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>Collection</td>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>`<collection-name>.bru`</td>
      </tr>
      <tr>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>Folder</td>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>`<folder-name>.bru`</td>
      </tr>
      <tr>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>Request</td>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>`<request-name>.bru`</td>
      </tr>
      <tr>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>Environment</td>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>`<env-name>.bru`</td>
      </tr>
      <tr>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>Runtime</td>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>Local storage</td>
      </tr>
      <tr>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>Global</td>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>Local storage</td>
      </tr>
      <tr style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%' }}>Process Environment</td>
        <td style={{ padding: '8px', border: '1px solid #ddd', width: '50%', fontStyle: 'italic' }}>Separate `.env` file</td>
      </tr>
    </tbody>
  </table>
</div>


### Variable Data Type

All variables are stored as strings. Trayce does not infer or change the data type of the variable based on the value you set.

### Debugging Variables in Scripts

You can access and debug variables in the console using the following pattern:

The pattern follows `bru.get[Type]Var(key)` where:
- `[Type]` is the variable type (Runtime, Request, Folder, etc.)
- `key` is the variable name you want to access

### Example:

```javascript
// Basic syntax: console.log(bru.get[Type]Var(key))
console.log(bru.getVar('myVar'))           // Runtime variables
```

### Scripting API

Please see the [Scripting API](../scripting) for more information on how to access variables in your scripts.
