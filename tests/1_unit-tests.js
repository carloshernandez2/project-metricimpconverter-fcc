const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  test('convertHandler should correctly read a whole number input', function () {
    
    const input = '8lbs'
    const expected = 8
    const result = convertHandler.getNum(input)

    assert.strictEqual(result, expected, 'getNum method should return 8 when given the input 8');
  });

  test('convertHandler should correctly read a decimal number input.', function () {

    const input = '8.2lbs'
    const expected = 8.2
    const result = convertHandler.getNum(input)

    assert.strictEqual(result, expected, 'getNum method should return 8.2 when given the input 8.2');
  });

  test('convertHandler should correctly read a fractional input.', function () {

    const input = '8/2lbs'
    const expected = 8/2
    const result = convertHandler.getNum(input)

    assert.strictEqual(result, expected, 'getNum method should return 8/2 when given the input 8/2');
  });

  test('convertHandler should correctly read a fractional input with a decimal.', function () {

    const input = '8.2/2lbs'
    const expected = 8.2/2
    const result = convertHandler.getNum(input)

    assert.strictEqual(result, expected, 'getNum method should return 8.2/2 when given the input 8.2/2');
  });

  test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', function () {

    const input = '8.2/2/3lbs'
    const expected = Error
    const result = convertHandler.getNum(input)

    assert.instanceOf(result, expected, 'getNum method should return an error when given the input 8.2/2/3');
  });

  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function () {

    const input = 'lbs'
    const expected = 1
    const result = convertHandler.getNum(input)

    assert.strictEqual(result, expected, 'getNum method should return 1 when no numerical input is provided.');
  });

  test('convertHandler should correctly read each valid input unit.', function () {

    const inputArray = ['2lbs', '2mi', '2kg', '2km', '2L', '2gal']
    const expected = ['lbs', 'mi', 'kg', 'km', 'L', 'gal']

    const result = inputArray.map(input => {
      return convertHandler.getUnit(input)
    }) 

    assert.deepEqual(result, expected, 'getUnit method should return the unit of each string');
  });

  test('convertHandler should correctly return an error for an invalid input unit.', function () {

    const input = '2lbse'
    const expected = Error
    const result = convertHandler.getUnit(input)

    assert.instanceOf(result, expected, 'getUnit method should return an error when given the input 2lbse');
  });

  test('convertHandler should return the correct return unit for each valid input unit.', function () {

    const inputArray = ['lbs', 'mi', 'kg', 'km', 'L', 'gal']
    const expected = ['kg', 'km', 'lbs', 'mi', 'gal', 'L']

    const result = inputArray.map(input => {
      return convertHandler.getReturnUnit(input)
    }) 

    assert.deepEqual(result, expected, 'getReturnUnit method should return the conversion Array');
  });

  test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', function () {

    const inputArray = ['lbs', 'mi', 'kg', 'km', 'L', 'gal']
    const expected = ['pounds', 'miles', 'kilograms', 'kilometers', 'liters', 'gallons']

    const result = inputArray.map(input => {
      return convertHandler.spellOutUnit(input)
    }) 

    assert.deepEqual(result, expected, 'spellOutUnit method should return the spelled-out strings Array');
  });

  test('convertHandler should correctly convert gal to L.', function () {
    
    const input = [1, 'gal']
    const expected = 3.78541
    const result = convertHandler.convert(...input)

    assert.strictEqual(result, expected, "convert method should return 3.78541 when given the input [1, 'gal']");
  });

  test('convertHandler should correctly convert L to gal.', function () {
    
    const input = [3.78541, 'L']
    const expected = 1
    const result = convertHandler.convert(...input)

    assert.strictEqual(result, expected, "convert method should return 1 when given the input [3.78541, 'L']");
  });

  test('convertHandler should correctly convert mi to km.', function () {
    
    const input = [1, 'mi']
    const expected = 1.60934
    const result = convertHandler.convert(...input)

    assert.strictEqual(result, expected, "convert method should return 1.60934 when given the input [1, 'mi']");
  });

  test('convertHandler should correctly convert km to mi.', function () {
    
    const input = [1.60934, 'km']
    const expected = 1
    const result = convertHandler.convert(...input)

    assert.strictEqual(result, expected, "convert method should return 1 when given the input [1.60934, 'km']");
  });

  test('convertHandler should correctly convert lbs to kg.', function () {
    
    const input = [1, 'lbs']
    const expected = 0.45359
    const result = convertHandler.convert(...input)

    assert.strictEqual(result, expected, "convert method should return 0.453592 when given the input [1, 'lbs']");
  });

  test('convertHandler should correctly convert kg to lbs.', function () {
    
    const input = [0.45359, 'kg']
    const expected = 1    
    const result = convertHandler.convert(...input)

    assert.strictEqual(result, expected, "convert method should return 1 when given the input [0.45359, 'kg']");
  });

});