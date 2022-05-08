const {createHash} = require('crypto');

const generateMD5 = (value: string): string => {
    return createHash('md5').update(value).digest('hex');
}

module.exports = generateMD5;