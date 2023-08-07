const alphabetUk = {
    'а': '.-',
    'б': '-...',
    'в': '.--',
    'г': '....',
    'ґ': '--.',
    'д': '-..',
    'е': '.',
    'є': '..-..',
    'ж': '...-',
    'з': '..--',
    'и': '-.--',
    'і': '..',
    'ї': '.---.',
    'й': '.---',
    'к': '-.-',
    'л': '.-..',
    'м': '--',
    'н': '-.',
    'о': '---',
    'п': '.--.',
    'р': '.-.',
    'с': '...',
    'т': '-',
    'у': '..-',
    'ф': '..-.',
    'х': '----',
    'ц': '-.-.',
    'ч': '---.',
    'ш': '--.-',
    'щ': '--.--',
    'ь': '-..-',
    'ю': '..--',
    'я': '.-.-',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '.': '......',
    ',': '.-.-.-',
    '/': '-..-.',
    '?': '..--..',
    '!': '--..--',
    ':': '---...',
    ';': '-.-.-.', 
    '(': '-.--.-',
    ')': '-.--.-',
    "'": '.----.',
    '-': '-....-',
    '"': '.-..-.',
    ' ': '-...-',
    '@': '.--.-.',
    '$': '...-..-',
    'error/interrupt': '........',
    'end': '..-.-'
}

const alphabetEn = {
    'a': '.-',
    'b': '-...',
    'w': '.--',
    'h': '....',
    'g': '--.',
    'd': '-..',
    'e': '.',
    'v': '...-',
    'z': '..--',
    'y': '-.--',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'f': '..-.',
    'ch': '----',
    'c': '-.-.',
    'q': '--.-',
    'x': '-..-',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '.': '......',
    ',': '.-.-.-',
    '/': '-..-.',
    '?': '..--..',
    '!': '--..--',
    ':': '---...',
    ';': '-.-.-.', 
    '(': '-.--.-',
    ')': '-.--.-',
    "'": '.----.',
    '-': '-....-',
    '"': '.-..-.',
    ' ': '-...-',
    '@': '.--.-.',
    '$': '...-..-',
    'error/interrupt': '........',
    'end': '..-.-'
}

function cipher(sentence){
    const splited = sentence.split('');
    let result = '';
    for(let i of splited){
        if(alphabetUk[i]){
            result += alphabetUk[i] + '\n';
        } else if(alphabetEn[i]){
            result += alphabetEn[i] + '\n';
        }
    }
    return result;
}

function decipher(sentence){
    sentence = sentence.trim();
    const reverseAlphabetUa = {};
    const reverseAlphabetEn = {};
    const keysUa = [];
    const keysEn = [];
    for(let i in alphabetUk){
        keysUa.push(i);
        reverseAlphabetUa[alphabetUk[i]] = i;
    }
    for(let j in alphabetEn){
        keysEn.push(alphabetEn[j]);
        reverseAlphabetEn[alphabetEn[j]] = j;
    }
    let result = '';
    for(let k = sentence.length; k >= 0; k--){
        if(keysEn.includes(sentence.slice(0, k))){
            result += reverseAlphabetEn[sentence.slice(0, k)];
            sentence = sentence.replace(sentence.slice(0, k), '').trim();
            k = sentence.length + 1;
        }
    }
    return result;
}

function toASCII(str) {
    let res = '';
    [...str].forEach(e => {
        res += e.charCodeAt() + '.';
    });
    return res;
}

function fromASCII(str) {
    let res = '';
    str.split('.').forEach(e => {
        res += e.length > 0 ? String.fromCharCode(parseInt(e)) : '';
    });
    return res;
}

export { cipher, decipher, toASCII, fromASCII }