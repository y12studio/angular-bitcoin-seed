'use strict';

var assert = require('chai').assert;
var fooapp = require('../index');
var FooLib = fooapp.FooLib

describe('#foo@Index', function() {
    it('foo', function() {
        var app =  new FooLib()
        assert.equal(app.foo(),'hello');
    });
});
