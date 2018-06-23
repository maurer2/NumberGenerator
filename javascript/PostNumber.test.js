const expect = require('chai').expect;
const assert = require('chai').assert;
const Postnumber = require('./Postnumber');

describe('calculate PostnumberConverter', function () {
    it('should return a number string', function () {
        const number = '121212555';
        const result = Postnumber(number);

        expect(result).to.be.a('string');
    });

    it('should return correct number', function () {
        expect(Postnumber('121212555')).to.be.equal('3000764851222050');
        expect(Postnumber('1234567')).to.be.equal('3000007790117779');
        expect(Postnumber('12345678')).to.be.equal('3000077901228187');
        expect(Postnumber('123456789')).to.be.equal('3000779012338595');
        expect(Postnumber('5555555')).to.be.equal('3000035055552059');
    });

    it('should return a 16 digit number', function () {
        const number = '121212555';
        const result = Postnumber(number);
        const resultLength = result.toString().length;

        expect(resultLength).to.be.equal(16)
    });
});