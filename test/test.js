'use strict';

var expect = require('chai').expect;
var FooApp = require('../index');

describe('#foo', function() {
    it('foo', function() {
        var app =  new FooApp()
        expect(app.foo()).to.equal('hello');
    });
});
