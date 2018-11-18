import { expect } from 'chai';
import Postnumber from './PostNumber';

describe('calculate PostnumberConverter', () => {
  it('should return a number string', () => {
    const number = '121212555';
    const result = new Postnumber().getNewPostNumber(number);

    expect(result).to.be.a('string');
  });

  it('should return correct number', () => {
    const pn = new Postnumber();

    expect(pn.getNewPostNumber('121212555')).to.be.equal('3000764851222050');
    expect(pn.getNewPostNumber('1234567')).to.be.equal('3000007790117779');
    expect(pn.getNewPostNumber('12345678')).to.be.equal('3000077901228187');
    expect(pn.getNewPostNumber('123456789')).to.be.equal('3000779012338595');
    expect(pn.getNewPostNumber('5555555')).to.be.equal('3000035055552059');
  });

  it('should return a 16 digit number', () => {
    const number = '121212555';
    const result = new Postnumber().getNewPostNumber(number);
    const resultLength = result.toString().length;

    expect(resultLength).to.be.equal(16);
  });
});
