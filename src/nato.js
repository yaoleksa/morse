export default class IrsaEncoder {
    aplphabet = {
        "A": "Alfa",
        "B": "Bravo",
        "C": "Charlie",
        "D": "Delta",
        "E": "Echo",
        "F": "Foxtrot",
        "G": "Golf",
        "H": "Hotel",
        "I": "India",
        "J": "Juliett",
        "K": "Kilo",
        "L": "Lima",
        "M": "Mike",
        "N": "Novemner",
        "O": "Oscar",
        "P": "Papa",
        "Q": "Quebec",
        "R": "Romeo",
        "S": "Sierra",
        "T": "Tango",
        "U": "Uniform",
        "V": "Victor",
        "W": "Whiskey",
        "X": "Xray",
        "Y": "Yankee",
        "Z": "Zulu",
        "a": "alfa",
        "b": "bravo",
        "c": "charlie",
        "d": "delta",
        "e": "echo",
        "f": "foxtrot",
        "g": "golf",
        "h": "hotel",
        "i": "india",
        "j": "juliett",
        "k": "kilo",
        "l": "lima",
        "m": "mike",
        "n": "novemner",
        "o": "oscar",
        "p": "papa",
        "q": "quebec",
        "r": "romeo",
        "s": "sierra",
        "t": "tango",
        "u": "uniform",
        "v": "victor",
        "w": "whiskey",
        "x": "xray",
        "y": "yankee",
        "z": "zulu",
    }
    constructor(param){
        this.sentence = param;
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
        this.sentence.match(/[a-zA-Z]+|[\!\@\#\$\%\^\&\*\(\)\_\-\=\+\.\,\;\:\'\?]/g).forEach(word => {
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