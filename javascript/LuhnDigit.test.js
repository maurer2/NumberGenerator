import { expect } from 'chai';
import LuhnChecker from './LuhnDigit';

describe('calculate LuhnDigit', () => {
  it('should return a number', () => {
    const number = '123456123';
    const result = LuhnChecker.getChecksum(number);

    expect(result).to.be.a('number');
  });

  it('should return a number between 1 and 9', () => {
    const number = '123456123';
    const result = LuhnChecker.getChecksum(number);

    expect(result).to.be.at.least(1);
    expect(result).to.be.at.most(9);
  });

  it('should return a single digit number', () => {
    const number = '123456123';
    const result = LuhnChecker.getChecksum(number);
    const resultLength = result.toString().length;

    expect(resultLength).to.be.equal(1);
  });

  it('should return correct number', () => {
    expect(LuhnChecker.getChecksum('123456123')).to.be.equal(9);
    expect(LuhnChecker.getChecksum('123456789')).to.be.equal(7);
    expect(LuhnChecker.getChecksum('987654321')).to.be.equal(7);
    expect(LuhnChecker.getChecksum('12345678')).to.be.equal(2);
    expect(LuhnChecker.getChecksum('87654321')).to.be.equal(6);
    expect(LuhnChecker.getChecksum('5555555')).to.be.equal(1);
  });
});
