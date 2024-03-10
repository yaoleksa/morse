export default class IrsaEncoder {
    aplphabet = {
        "a": "Alfa",
        "b": "Bravo",
        "c": "Charlie",
        "d": "Delta",
        "e": "Echo",
        "f": "Foxtrot",
        "g": "Golf",
        "h": "Hotel",
        "i": "India",
        "j": "Juliett",
        "k": "Kilo",
        "l": "Lima",
        "m": "Mike",
        "n": "Novemner",
        "o": "Oscar",
        "p": "Papa",
        "q": "Quebec",
        "r": "Romeo",
        "s": "Sierra",
        "t": "Tango",
        "u": "Uniform",
        "v": "Victor",
        "w": "Whiskey",
        "x": "Xray",
        "y": "Yankee",
        "z": "Zulu"
    }
    constructor(param){
        this.sentence = param.toLowerCase();
    }
    encode() {
        let result = '';
        this.sentence.split('').forEach(char => {
            if(this.aplphabet.hasOwnProperty(char)) {
                result += this.aplphabet[char] + ' ';
            } else if(char === ' ') {
                result += ' space ';
            } else {
                result += char;
            }
        });
        return result;
    }
    decode() {
        let result = '';
        this.sentence.match(/[a-zA-Z]+|[\!\@\#\$\%\^\&\*\(\)\_\-\=\+\.\,\;\:\'\\s]/g).forEach(word => {
            if(this.aplphabet.hasOwnProperty(word[0]) && word !== 'space') {
                result += word[0];
            } else if(word === 'space') {
                result += ' ';
            } else {
                result += word;
            }
        });
        return result;
    }
}