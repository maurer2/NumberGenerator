export default class LuhnChecker{
    constructor() {}

    getChecksum(numForward) {
        const num = numForward.toString().split('').reverse().join(''); // algorithm starts from the right

        const sum = num.split('').reduce((total, current, index) => {
            const isOdd = (index % 2) === 0;
            let summand = parseInt(current, 10);

            if (isOdd) {
                const doubleSummand = summand * 2;

                summand = doubleSummand;

                if (doubleSummand > 9) {
                    summand = doubleSummand - 9;
                }
            }

            return total + summand;
        }, 0);

        const checksum = ((10 - (sum % 10)) % 10);

        return checksum;
    }
}

/*
module.exports = function(number) {
    const checker = new LuhnChecker(number);
    const num = checker.getChecksum();

    return num;
};
*/

if (require.main === module) {
    const param = process.argv.slice(2)[0];
    const checker = new LuhnChecker(param);
    const num = checker.getChecksum();

    console.log(num);
}