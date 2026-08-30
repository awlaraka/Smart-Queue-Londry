function generateQueue(number) {

    return 'A' + number.toString().padStart(4, '0');

}

module.exports = generateQueue;