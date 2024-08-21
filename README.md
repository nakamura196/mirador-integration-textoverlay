## Integrating Mirador

[![Node.js CI](https://github.com/nakamura196/mirador-integration-textoverlay/actions/workflows/node.js.yml/badge.svg)](https://github.com/nakamura196/mirador-integration-textoverlay/actions/workflows/node.js.yml)

This repository is designed to show integrating Mirador 3 with modern frontend build systems.

This is based on the following repository.

https://github.com/ProjectMirador/mirador-integration

### Dependencies

You will likely need to have at least the following dependencies available in your `package.json`.

- `mirador`
- `react`
- `react-dom`
- `mirador-textoverlay` - A plugin just to test plugin integration

### Webpack

See `webpack.config.js` for a basic webpack setup for Mirador 3 + a plugin.

```sh
npm run webpack
```
