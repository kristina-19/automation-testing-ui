const randomstring = require('randomstring');

function generateString(length) {
    return randomstring.generate(length);
}

module.exports = { generateString }