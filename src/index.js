module.exports = function toReadable (number) {
    const argNumber = number.toString().split('');
    const nameNumber = (simpleNumber) => {
        switch (simpleNumber) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
        }
    }
    const nameNumber2 = (simpleNumber) => {
        switch (simpleNumber) {
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
        }
    }
    const nameNumber3 = (simpleNumber) => {
        switch (simpleNumber) {
            case 20:
                return 'twenty';
            case 30:
                return 'thirty';
            case 40:
                return 'forty';
            case 50:
                return 'fifty';
            case 60:
                return 'sixty';
            case 70:
                return 'seventy';
            case 80:
                return 'eighty'
            case 90:
                return 'ninety'
        }
    }
    if (number === 0) {
        return 'zero';
    } else if (number.toString().length === 1) {
        return nameNumber(number);
    } else if (number >= 10 && number < 20) {
        return nameNumber2(number);
    } else if (number.toString().length === 2 && +argNumber[1] === 0) {
        return `${nameNumber3(+argNumber[0] * 10)}`;
    } else if (number.toString().length === 2 && +argNumber[1] > 0)  {
        return `${nameNumber3(+argNumber[0] * 10)} ${nameNumber(+argNumber[1])}`;
    } else if (number.toString().length === 3 && +argNumber[1] === 0 && +argNumber[2] === 0) {
        return `${nameNumber(+argNumber[0])} hundred`
    } else if (number.toString().length === 3 && +argNumber[1] === 0 && +argNumber[2] !== 0) {
        return `${nameNumber(+argNumber[0])} hundred ${nameNumber(+argNumber[2])}`;
    } else if (number.toString().length === 3 && +argNumber[1] === 1) {
        return `${nameNumber(+argNumber[0])} hundred ${nameNumber2(+(argNumber[1]+argNumber[2]))}`;
    }  else if (number.toString().length === 3 && +argNumber[1] > 1 && +argNumber[2] === 0) {
        return `${nameNumber(+argNumber[0])} hundred ${nameNumber3(+(argNumber[1]+argNumber[2]))}`;
    } else {
        return `${nameNumber(+argNumber[0])} hundred ${nameNumber3(+argNumber[1] * 10)} ${nameNumber(+argNumber[2])}`
    }
}
