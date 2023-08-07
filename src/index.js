import * as coder from './morze.js';

if(!window.location.href.includes('ASCII')) {
    document.getElementById('encode').addEventListener('click', () => {
        document.getElementById('output').innerHTML = coder.cipher(
            document.getElementById('input_field').value.toLowerCase()
        );
    });
    document.getElementById('decode').addEventListener('click', () => {
        document.getElementById('output7').innerHTML = coder.decipher(
            document.getElementById('input_field3').value.toLowerCase()
        );
    });
} else {
    document.getElementById('encodeASCII').addEventListener('click', () => {
        document.getElementById('outputASCII').innerHTML = coder.toASCII(
            document.getElementById('input_fieldASCII').value
        );
    });
    document.getElementById('decodeASCII').addEventListener('click', () => {
        document.getElementById('output7ASCII').innerHTML = coder.fromASCII(
            document.getElementById('input_field3ASCII').value
        );
    });
}