const expect = require('chai').expect;
const getLuhnCheckDigit = require('./LuhnDigit');

describe('calculate LuhnDigit', function () {
  it('should return a number', function () {
    const number = '123456123';
    const result = getLuhnCheckDigit(number);

    expect(result).to.be.a('number');
  });

  it('should return a number between 1 and 9', function () {
    const number = '123456123';
    const result = getLuhnCheckDigit(number);

    expect(result).to.be.at.least(1);
    expect(result).to.be.at.most(9);
  });

  it('should return a single digit number', function () {
    const number = '123456123';
    const result = getLuhnCheckDigit(number);
    const resultLength = result.toString().length;

    expect(resultLength).to.be.equal(1)
  });

  it('should return correct number', function () {
    expect(getLuhnCheckDigit('123456123')).to.be.equal(9);
    expect(getLuhnCheckDigit('123456789')).to.be.equal(7);
    expect(getLuhnCheckDigit('987654321')).to.be.equal(7);
    expect(getLuhnCheckDigit('12345678')).to.be.equal(2);
    expect(getLuhnCheckDigit('87654321')).to.be.equal(6);
    expect(getLuhnCheckDigit('5555555')).to.be.equal(1);
  });
});