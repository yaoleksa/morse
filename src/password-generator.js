const pwdGen = (desiredLength) => {
    let alphabet = document.getElementsByName("spec-char")[0].checked ? "0123456789" : "!#$%&*-_=+0123456789";
    for(let i = 65; i < 65 + 26; ++i) alphabet += String.fromCharCode(i);
    for(let i = 97; i < 97 + 26; ++i) alphabet += String.fromCharCode(i);
    const alphabetLength = alphabet.length;
    return Array.from({length: desiredLength}, v => alphabet[parseInt(Math.random() * alphabetLength)]).join("");
}

export { pwdGen };