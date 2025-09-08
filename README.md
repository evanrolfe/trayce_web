# Trayce Website

Pre-requisites: [Hugo](https://gohugo.io/getting-started/installing/), [Go](https://golang.org/doc/install) and [Git](https://git-scm.com)

```shell
# Start the server
hugo mod tidy
hugo server --logLevel debug --disableFastRender -p 1313
```

**Note:** `./docs` is where the generated html files live. Actual docs markdown files are in `./content/docs`.
