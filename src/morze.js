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
    '5': '-.....',
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
    const sentenceLength = sentence.length;
    let languageSelected;
    let chunkCommon;
    let result = '';
    let alphabet;
    let chunkEn;
    let chunkUa;
    let chunk;
    let start = 0;
    for(let i = 1; i <= sentenceLength; ++i) {
        chunk = sentence.slice(start, i).trim();
        chunkEn = reverseAlphabetEn[chunk];
        chunkUa = reverseAlphabetUa[chunk];
        chunkCommon = reverseCommon[chunk];
        if(chunk === '.---.' && !languageSelected) {
            languageSelected = true;
            alphabet = 'ua';
            start = i;
            continue;
        } else if(chunk === '-.-..-' && !languageSelected) {
            languageSelected = true;
            alphabet = 'en';
            start = i;
            continue;
        }
        if(alphabet === 'ua' && chunkUa) {
            while(chunkUa && i <= sentenceLength + 1) {
                ++i;
                chunk = sentence.slice(start, i);
                chunkUa = reverseAlphabetUa[chunk];
            }
            --i;
            chunk = sentence.slice(start, i);
            chunkUa = reverseAlphabetUa[chunk];
            result += chunkUa;
            alphabet = null;
            languageSelected = false;
            start = i;
            continue;
        } else if(alphabet === 'en' && chunkEn) {
            while(chunkEn && i <= sentenceLength + 1) {
                ++i;
                chunk = sentence.slice(start, i);
                chunkEn = reverseAlphabetEn[chunk];
            }
            --i;
            chunk = sentence.slice(start, i);
            chunkEn = reverseAlphabetEn[chunk];
            result += chunkEn;
            alphabet = null;
            languageSelected = false;
            start = i;
            continue;
        } 
        if(chunkCommon) {
            while(chunkCommon && i <= sentenceLength + 1) {
                ++i;
                chunk = sentence.slice(start, i).trim();
                chunkCommon = reverseCommon[chunk];
            }
            --i;
            chunk = sentence.slice(start, i).trim();
            chunkCommon = reverseCommon[chunk];
            result += chunkCommon;
            start = i;
        }
    }
    return result.length > 0 ? result : '0x0x0';
}

export { cipher, decipher };