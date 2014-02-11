
/*
 * Module dependencies.
 */

var stylus = require('stylus');
var assert = require('assert');
var join = require('path').join;

exports = module.exports = plugin;

/**
 * Library version.
 */

exports.version = require(join(__dirname, 'package.json'));

/**
 * Stylus path.
 */

exports.path = __dirname;

/**
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */

function plugin(style){
  style.include(__dirname);

  style.define('assert-fail', function(actual, expected, message){
    assert.fail(actual.raw, expected.raw, message);
    return true;
  });

  style.define('assert', function(value, message){
    assert(value.raw, message);
    return true;
  });

  style.define('assert-ok', function(value, message){
    assert.ok(value.raw, message);
    return true;
  });

  style.define('assert-equal', function(actual, expected, message){
    assert.equal(actual.raw, expected.raw, message);
    return true;
  });

  style.define('assert-not-equal', function(actual, expected, message){
    assert.notEqual(actual.raw, expected.raw, message);
    return true;
  });
};
