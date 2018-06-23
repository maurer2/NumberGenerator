class LuhnChecker {
    constructor(num) {
        this.num = num.toString().split('').reverse().join(''); // algorithm starts from the right
    }

    getChecksumDigit() {
        let sum = 0;
        let isOdd = true;

        for (let curChar of this.num) {
            let addValue = parseInt(curChar, 10);

            if (isOdd) {
                const doubleSummand = curChar * 2;
                addValue = (doubleSummand > 9) ? (doubleSummand - 9) : doubleSummand
            }

            sum = sum + addValue;
            isOdd = !isOdd;
        }

        const checksum = ((10 - (sum % 10)) % 10);

        return checksum
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