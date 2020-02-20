module.exports = function toReadable(num) {
    let numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const getNumber = num => (dozens[Math.floor(num / 10)] + " " + numbers[num % 10]).trim();
    const getDozens = num => num > 19 ? getNumber(num) : numbers[num];
    switch (true) {
        case num == 0: return 'zero';
        case num <= 19:
            return numbers[num];
        case num < 100:
            return getNumber(num)
        case num >= 100 && num <= 1000:
            return (numbers[Math.floor(num / 100)] + ' hundred ' + getDozens(num % 100)).trim();
    }
}

