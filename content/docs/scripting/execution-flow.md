---
title: Execution Flow
weight: 1
prev: docs/scripting
---

In Trayce scripts run in a : **"Sandwich"** flow order. This controls the order in which the scripts at various levels of your API test collections are executed.

## Flow Types

1. Sandwich Flow
2. Sequential (Natural) Flow

### 1. Sandwich Flow

In the **Sandwich Flow**, scripts are executed in the following order:

```bash
sandwich-flow/
├── Collection Pre Script
│   └── Folder Pre Script
│       └── Request Pre Script
└── Request Post Script
    └── Folder Post Script
        └── Collection Post Script
```

This order allows you to execute actions at multiple levels (collection, folder, and request) before and after each test. It is useful when you need to configure different environments or states before and after running tests at various levels.

### 2. Sequential (Natural) Flow

{{<callout type="error" >}}
Sequential flow is not yet implemented in Trayce!
<br>
Check the [GitHub releases page](https://github.com/evanrolfe/trayce_gui/releases) for updates, or subscribe to version updates [here](https://trayce.dev).
{{</callout>}}

In the **Sequential Flow**, scripts are executed in this order:

```bash
sequential-flow/
├── Collection Pre Script
│   └── Folder Pre Script
│       └── Request Pre Script
└── Collection Post Script
    └── Folder Post Script
        └── Request Post Script
```

This flow executes scripts in a more natural, linear order. After the **Request Pre Script**, it runs the **Collection Post Script**, followed by **Folder Post Script**, and finally, the **Request Post Script**. This flow may be better suited when you want a clean execution from top to bottom.
