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
    'ю': '..-.-',
    'я': '.-.-'
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
    'x': '-..-'
}

const common = {
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
    for(let i of splited) {
        let au = alphabetUk[i];
        let ae = alphabetEn[i];
        let ac = common[i];
        if(au) {
            result += '.---.' + au + '\n';
        } else if(ae) {
            result += '-.-..-' + ae + '\n';
        } else if (ac) {
            result += ac;
        }
    }
    return result;
}

function decipher(sentence){
    sentence = sentence.trim();
    const reverseAlphabetUa = Object.fromEntries(Object.entries(alphabetUk).map(([key, value]) => [value, key]));
    const reverseAlphabetEn = Object.fromEntries(Object.entries(alphabetEn).map(([key, value]) => [value, key]));
    const reverseCommon = Object.fromEntries(Object.entries(common).map(([key, value]) => [value, key]));
    const keysUa = Object.keys(alphabetUk);
    const keysEn = Object.keys(alphabetEn);
    let result = '';
    let alphabet;
    let chunkCommon;
    let chunkEn;
    let chunkUa;
    let chunk;
    let languageSelected;
    for(let k = sentence.length; k >= 0; k--) {
        chunk = sentence.slice(0, k);
        chunkEn = reverseAlphabetEn[chunk];
        chunkUa = reverseAlphabetUa[chunk];
        chunkCommon = reverseCommon[chunk];
        if(chunk === '.---.' && !languageSelected) {
            languageSelected = true;
            alphabet = 'ua';
            sentence = sentence.replace(chunk, '').trim();
            k = sentence.length + 1;
            continue;
        } else if(chunk === '-.-..-' && !languageSelected) {
            languageSelected = true;
            alphabet = 'en';
            sentence = sentence.replace(chunk, '').trim();
            k = sentence.length + 1;
            continue;
        }
        if(alphabet === 'ua' && keysUa.includes(chunkUa)) {
            result += chunkUa;
            sentence = sentence.replace(chunk, '').trim();
            k = sentence.length + 1;
            alphabet = null;
            languageSelected = false;
        } else if(alphabet === 'en' && keysEn.includes(chunkEn)){
            result += chunkEn;
            sentence = sentence.replace(chunk, '').trim();
            k = sentence.length + 1;
            alphabet = null;
            languageSelected = false;
        } else if(chunkCommon) {
            result += chunkCommon;
            sentence = sentence.replace(chunk, '').trim();
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

export { cipher, decipher, toASCII, fromASCII };