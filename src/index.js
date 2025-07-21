module.exports = function toReadable(number) {
  if (number === 0) {
    return 'zero';
  }
  const a = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const b = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const c = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let numberStr = number.toString();
  const numberStrLength = numberStr.length;
  let result = '';
  for (let i = 0; i < numberStrLength; i += 1) {
    if (numberStr.length === 3) {
      result += `${a[Number(numberStr[0]) - 1]} hundred `;
      if (numberStr.slice(1) === '00') break;
    }
    if (numberStr.length === 2) {
      if (numberStr[0] === '1') {
        result += `${b[Number(numberStr) - 10]} `;
        break;
      } else if (numberStr[0] !== '0') {
        result += `${c[Number(numberStr[0]) - 2]} `;
        if (numberStr[1] === '0') break;
      }
    }
    if (numberStr.length === 1) {
      result += `${a[Number(numberStr[0]) - 1]} `;
    }
    numberStr = numberStr.slice(1);
  }
  return result.trim();
};
