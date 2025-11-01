import * as coder from './morze.js';
import BinaryEncoder from './binary.js';
import IrsaEncoder from './nato.js';
import * as pwd from './password-generator.js';

if(window.location.href.includes('index')) {
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
} else if(window.location.href.includes('ASCII')) {
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