---
title: Variables Interpolation
type: docs
prev: docs/variables/process-environment-variables
next: docs/scripting
weight: 8
---

Variable interpolation allows you to use variables in your requests using the `{{variableName}}` syntax. Let's explore how interpolation works with different data types.

## Basic Interpolation

### Strings

```javascript
// Setting a string variable
bru.setVar("greeting", "Hello World");

// Using in request
GET http://api.example.com/{{greeting}}
// Interpolates to: http://api.example.com/Hello World
```

### Numbers

```javascript
// Setting a number variable
bru.setVar("userId", 123);

// Using in request
GET http://api.example.com/users/{{userId}}
// Interpolates to: http://api.example.com/users/123
```

### Booleans

```javascript
// Setting a boolean variable
bru.setVar("isActive", true);

// Using in request body
{
  "active": {{isActive}}
}
// Interpolates to: { "active": true }
```

## Object Interpolation

You can access object properties using dot notation. Here's how to work with objects containing different data types:

```javascript
// Define your object with multiple data types
const userProfile = {
  username: "john_doe",           // string
  accountId: 12345,              // number
  isVerified: true,              // boolean
  preferences: {                  // nested object
    theme: "dark",
    notifications: true
  }
};

// Set the object as a variable
bru.setVar("user", userProfile);

// Using in request body
{
  "username": "{{user.username}}",
  "verified": {{user.isVerified}},
  "preferences": {{user.preferences}},
}

// Interpolates to:
// {
//   "username": "john_doe",
//   "verified": true,
//   "preferences": {
//    "theme": "dark",
//    "notifications": true
 //   }
// }
```

## Array Interpolation

```javascript
// Define your arrays
const technologies = ["REST", "GraphQL", "gRPC"];

const settings = [
  { port: 3000, env: "dev" },
  { port: 8080, env: "prod" }
];

// Set arrays as variables
bru.setVar("apiTypes", technologies);
bru.setVar("configs", settings);

// Using array elements in request
{
  // Simple array access
  "primaryAPI": "{{apiTypes[0]}}",        // "REST"
  "alternativeAPI": {{apiTypes}},

  // Accessing object properties in arrays
  "devPort": {{configs[0].port}},         // 3000
  "prodEnv": {{configs}},

  // Using multiple array elements
  "supported": {
    "apis": ["{{apiTypes[0]}}", "{{apiTypes[1]}}"],
  }
}

// Interpolates to:
// {
//   "primaryAPI": "REST",
//    "alternativeAPI": [
//    "REST",
//    "GraphQL",
//    "gRPC"
//    ]
//   "devPort": 3000,
//   "prodEnv": [
//    {
//      "port": 3000,
//      "env": "dev"
//    },
//    {
//      "port": 8080,
//     "env": "prod"
//    }
//  ]

//   "supported": {
//     "apis": ["REST", "GraphQL"],
//   }
// }
```

## Date Interpolation


```javascript

bru.setVar("timestamp", new Date());

// Using in request
{
  "createdAt": "{{timestamp}}"
}
// Interpolates to:
// {
//   "createdAt": "2025-04-23T13:57:56.341Z"
// }
```

## Practical Examples

### API Authentication

```javascript
bru.setVar("authConfig", {
  apiKey: "your-api-key",
  secret: "your-secret"
});

// In request headers
headers {
  "X-API-Key": "{{authConfig.apiKey}}",
  "X-Secret": "{{authConfig.secret}}"
}
```

### Dynamic Query Parameters

```javascript
bru.setVar("searchParams", {
  limit: 10,
  offset: 0,
  filter: "active"
});

// In URL
GET http://api.example.com/users?limit={{searchParams.limit}}&offset={{searchParams.offset}}&filter={{searchParams.filter}}
```

### Request Body with Mixed Types

```javascript
bru.setVar("product", {
  name: "Pro Edition",
  price: 99.99,
});

// In request body
{
  "productName": "{{product.name}}",
  "price": {{product.price}},
  "firstFeature": "{{product.features[0]}}",
  "releaseDate": "{{product.metadata.released}}"
}
```

{{<callout type="info" >}}
  Remember that variables set using `bru.setVar()` are available throughout your collection's scope. Use them to make your requests more dynamic and maintainable.
{{</callout>}}
