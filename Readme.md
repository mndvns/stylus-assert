
[![Build Status](https://travis-ci.org/mvanasse/stylus-assert.png?branch=master)](https://travis-ci.org/mvanasse/stylus-assert)

# stylus-assert

  Assertions directly in [Stylus](http://learnboost.github.io/stylus/), using
  node's own [module](http://nodejs.org/api/assert.html).

## Installation

```bash
$ npm install stylus-assert
```

## Javascript API

  Obligatory connect/express example.

```javascript
var connect = require('connect');
var stylus = require('stylus');
var stylusAssert = require('stylus-assert');

var server = connect();

function compile(str, path) {
  return stylus(str)
	.set('filename', path)
	.set('compress', true)
	.use(stylusAssert);
}

server.use(stylus.middleware({
	src: __dirname
  , compile: compile
}));
```


