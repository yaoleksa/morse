export default class BinaryEncoder {
    static #toBinary(decimal) {
        let notReversed = '';
        let copy = decimal;
        while(copy > 0) {
            notReversed += copy%2;
            copy = Math.floor(copy/2);
        }
        return notReversed.split('').reverse().join('');
    }
    static #toDecimal(binary) {
        const asArray = binary.split('');
        let power = binary.length - 1;
        let result = 0;
        for(let num of asArray) {
            result += parseInt(num) * Math.pow(2, power);
            power--;
        }
        return result;
    }
    static encode(txt) {
        let result = new String();
        let asArray = txt.split('');
        for(let i of asArray) {
            result += this.#toBinary(i.charCodeAt()) + '\n';
        }
        return result;
    }
    static decode(sequence) {
        const asArray = sequence.trim().replace(/\n/g, ' ').split(' ');
        let result = '';
        for(let num of asArray) {
            result += String.fromCharCode(this.#toDecimal(num));
        }
        return result;
    }
}