class LuhnChecker {
    constructor(num) {
        this.num = num.toString().split('').reverse().join(''); // algorithm starts from the right
    }

    getChecksumDigit() {
        let sum = 0;
        let isOdd = true;

        for (let curChar of this.num) {
            let addValue = 0;
            let multipliedDigit = 0;

            if (isOdd) {
                multipliedDigit = curChar * 2;

                if (multipliedDigit > 9) {
                    addValue = multipliedDigit - 9;
                } else {
                    addValue = multipliedDigit;
                }
            } else {
                addValue = curChar;
            }

            sum = sum + parseInt(addValue, 10);
            isOdd = !isOdd;
        }

        return ((10 - (sum % 10)) % 10);
    }
}

module.exports = function(number) {
    const checker = new LuhnChecker(number);
    const num = checker.getChecksumDigit();

    return num;
};

if (require.main === module) {
    const param = process.argv.slice(2)[0];
    const checker = new LuhnChecker(param);
    const num = checker.getChecksumDigit();

    console.log(num);
}