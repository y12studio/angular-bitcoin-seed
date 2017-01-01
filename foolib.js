'use strict';
var bitcore = require('bitcore-lib')
var Unit = bitcore.Unit
var HDPrivateKey = bitcore.HDPrivateKey
var Hash = bitcore.crypto.Hash
var Buffer = bitcore.deps.Buffer

function FooLib() {}

FooLib.prototype.foo = function() {
    return 'hello'
}

FooLib.randomKey = function() {
    var hd = new HDPrivateKey()
    var key = hd.privateKey
    return {
        key: key,
        keyhex: key.toString('Hex'),
        address: key.toAddress().toString()
    }
}

module.exports = FooLib
