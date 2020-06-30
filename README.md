# argsinput

This package facilitates with command line inputs

## Installation

```shell
npm i argsinput
```

## Usage

```js
const options = require('argsinput');
console.log(options);
```

```shell
$ node index.js -debug true -logging enabled -count 5
{'debug': 'true', 'logging': 'enabled', 'count': '5'}
```
