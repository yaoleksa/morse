import * as coder from './morze.js';

document.getElementById('encode').addEventListener('click', () => {
    document.getElementById('output').innerHTML = coder.cipher(
        document.getElementById('input_field').value
    );
});
document.getElementById('decode').addEventListener('click', () => {
    document.getElementById('output7').innerHTML = coder.decipher(
        document.getElementById('input_field3').value
    );
});