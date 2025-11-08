import { toASCII, fromASCII } from './ascii.js';
import * as pwd from './password-generator.js';
import BinaryEncoder from './binary.js';
import * as coder from './morze.js';
import IrsaEncoder from './nato.js';

if(window.location.href.includes('index')) {
    const inputField3 = document.getElementById('input_field3');
    document.getElementById('encode').addEventListener('click', () => {
        document.getElementById('output').innerHTML = coder.cipher(
            document.getElementById('input_field').value.toLowerCase()
        );
    });
    document.getElementById('decode').addEventListener('click', () => {
        document.getElementById('output7').innerHTML = coder.decipher(
            inputField3.value.toLowerCase()
        );
    });
    document.getElementById('morse-clipboard').addEventListener('click', (event) => {
        navigator.clipboard.writeText(document.getElementById('output').innerText);
        event.target.style.display = 'none';
        const doubleCheck = document.getElementById('double-check-clipboard');
        doubleCheck.style.display = 'inline-flex';
        let opacity = 1;
        doubleCheck.style.opacity = opacity;
        let intervalId = setInterval(() => {
            doubleCheck.style.opacity = opacity;
            opacity -= 0.1;
            if(opacity < 0) {
                event.target.style.display = 'inline-flex';
                clearInterval(intervalId);
            }
        }, 250);
    });
    document.getElementById('morse-clear-content-brush').addEventListener('click', () => {
        inputField3.value = '';
    });
} else if(window.location.href.includes('ASCII')) {
    document.getElementById('encodeASCII').addEventListener('click', () => {
        document.getElementById('outputASCII').innerHTML = toASCII(
            document.getElementById('input_fieldASCII').value
        );
    });
    document.getElementById('decodeASCII').addEventListener('click', () => {
        document.getElementById('output7ASCII').innerHTML = fromASCII(
            document.getElementById('input_field3ASCII').value
        );
    });
} else if(window.location.href.includes('binary')) {
    document.getElementById('encode_binary').addEventListener('click', () => {
        document.getElementById('output_binary').innerHTML = BinaryEncoder
        .encode(document.getElementById('binary_input').value);
    });
    document.getElementById('decode_binary').addEventListener('click', () => {
        document.getElementById('output7binary').innerHTML = BinaryEncoder
        .decode(document.getElementById('input_field3binary').value);
    });
} else if(window.location.href.includes('nato')) {
    document.getElementById('encode').addEventListener('click', () => {
        document.getElementById('output').innerHTML = new IrsaEncoder(document
            .getElementById('input_field').value).encode();
    });
    document.getElementById('decode').addEventListener('click', () => {
        document.getElementById('output7').innerHTML = new IrsaEncoder(document
            .getElementById('input_field3').value).decode();
    });
} else if(window.location.href.includes('pwd-gen')) {
    document.getElementById('submit-button-pwd-gen').addEventListener('click', () => {
        console.log('?');
        document.getElementById("output").innerText = pwd.pwdGen(document.getElementById("desired-length").value);
    });
}