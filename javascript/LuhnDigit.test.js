var expect = require('chai').expect;
var assert = require('chai').assert;
var getLuhnCheckDigit = require('./LuhnDigit');

describe('calculate LuhnDigit', function () {
  it('should return a number', function () {
    var number = 1234567;
    var result = getLuhnCheckDigit(number);

    expect(result).to.be.a('number');
  });

  it('should return a number between 7 an 9 digits', function () {
    var number = 1234567;
    var result = getLuhnCheckDigit(number);

    expect(result).to.be.at.least(1);
    expect(result).to.be.at.most(9);
  });

  it('should return correct number', function () {
    var number = 1234567;
    var checkDigit = 4;
    var result = getLuhnCheckDigit(number);

    expect(checkDigit).to.be.equal(result);
  });
});