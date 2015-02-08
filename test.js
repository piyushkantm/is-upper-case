/* global describe, it */
var assert = require('assert')
var isUpperCase = require('./')

describe('is upper case', function () {
  it('should check if the string is upper case', function () {
    assert.equal(isUpperCase('TEST'), true)
    assert.equal(isUpperCase('test'), false)
    assert.equal(isUpperCase('Test'), false)
  })

  it('should support different locales', function () {
    assert.equal(isUpperCase('STRİNG', 'tr'), true)
    assert.equal(isUpperCase('STRING', 'tr'), true)
  })
})
