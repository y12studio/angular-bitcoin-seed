'use strict';

var assert = require('chai').assert;
var FooLib = require('../foolib');

describe('#foolib', function() {
    it('randomKey', function() {
        var key =  new FooLib.randomKey()
        console.log(key)
        assert.equal(key.keyhex.length, 64);
    });
});
