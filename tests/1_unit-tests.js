const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  test('convertHandler should correctly read a whole number input', function () {
    const input = 8
    const expected = 8

    const result = convertHandler.getNum(8)

    assert.strictEqual(result, expected, 'getNum method should return 8 when given the input 8');
  });

});