const randomestring = require('randomestring');

export function generateString(length) {
    return randomestring.generate(length);
}