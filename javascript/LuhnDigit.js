class LuhnChecker {
    constructor(num) {
        this.num = num;
    }

    getLuhnCheckDigit() {
        var lastIndex = this.num.toString().length - 1 ;
        var isOdd = true;
        var sum = 0;
        var curChar = '0';
        var addValue = 0;
        var multipliedDigit = 0;

        this.num += "";

        for (var n = lastIndex; n>=0; n--) {
            curChar = this.num.charAt(n);

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
            isOdd = !isOdd;
            sum += parseInt(addValue);
        }
        return ((10 - (sum % 10)) % 10);
    }
}

module.exports = function(number) {
    const checker = new LuhnChecker(number);
    const num = checker.getLuhnCheckDigit();

    return num;
}

if (require.main === module) {
    const param = process.argv.slice(2)[0];
    const checker = new LuhnChecker(param);
    const num = checker.getLuhnCheckDigit();

    console.log(num);
}