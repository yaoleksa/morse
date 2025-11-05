// ASCII cipher logic

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

export { toASCII, fromASCII };