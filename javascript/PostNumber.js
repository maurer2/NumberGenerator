import LuhnChecker from '../../numberGenerator/javascript/LuhnDigit.js';

export default class PostnumberConverter{
    constructor(){
        this.multiplicator = 631; // some magic
        this.LuhnCalculator = new LuhnChecker();
    }

    getNewPostNumber(shortPostNumber) {
        const num = this.multiplicator * shortPostNumber;

        const checksum = this.LuhnCalculator.getChecksum(num);
        const newPostnumber = '3' + `${num}${checksum}`.padStart(15, '0'); // prepend 3 - some magic

        return newPostnumber;
    }
}

/*
module.exports = function(number) {
    const converter = new PostnumberConverter(number);
    const num = converter.getNewPostNumber();

    return num;
};
*/

if (require.main === module) {
    const param = process.argv.slice(2)[0];
    const converter = new PostnumberConverter(param);
    const num = converter.getNewPostNumber();

    console.log(num);
}
