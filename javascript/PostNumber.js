import LuhnChecker from '../../NumberGenerator/javascript/LuhnDigit';

export default class PostnumberConverter {
  constructor() {
    this.multiplicator = 631; // some magic
  }

  getNewPostNumber(shortPostNumber) {
    const num = this.multiplicator * shortPostNumber;

    const checksum = LuhnChecker.getChecksum(num);
    const newPostnumber = `3${`${num}${checksum}`.padStart(15, '0')}`; // prepend 3 - some magic

    return newPostnumber;
  }
}

if (require.main === module) {
  const param = process.argv.slice(2)[0];
  const converter = new PostnumberConverter();
  const num = converter.getNewPostNumber(param);

  console.log(num);
}
