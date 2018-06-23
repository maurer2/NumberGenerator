const LuhnChecker = require('./LuhnDigit');

class PostnumberConverter{
    constructor(shortPostNumber){
        this.shortPostNumber = shortPostNumber;
        this.multiplicator = 631; // some magic
    }

    getNewPostNumber() {
        const num = this.shortPostNumber * this.multiplicator;
        const checksum = LuhnChecker(num);
        const newPostnumber = '3' + `${num}${checksum}`.padStart(15, '0'); // prepend 3 - some magic

        return newPostnumber; 
    }
}

module.exports = function(number) {
    const converter = new PostnumberConverter(number);
    const num = converter.getNewPostNumber();

    return num;
};

if (require.main === module) {
    const param = process.argv.slice(2)[0];
    const converter = new PostnumberConverter(param);
    const num = converter.getNewPostNumber();

    console.log(num);
}
