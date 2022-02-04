module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['7', '8', '|', '(', '[', '{', '1', '3', '5']
  const closeBrackets = ['7', '8', '|']
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
    '2': '1',
    '4': '3',
    '6': '5',

    // '7': '7',
    // '8': '8',
    // '|': '|',

  }

  let steck = [];
  let index;
  let current = 0;
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (currentSymbol === '7') {
      current++;
      index = 0;
    }
    if (currentSymbol === '8') {
      current++;
      index = 1
    }
    if (currentSymbol === '|') {
      current++;
      index = 2
    }
    if ((openBrackets.includes(currentSymbol)) && (current <= 1)) {
      steck.push(currentSymbol)
    } else {
      if (steck.length === 0) {
        return false
      }
    }

    let topElement = steck[steck.length - 1];

    if (brackets[currentSymbol] === topElement) {
      steck.pop();
    }
    if (closeBrackets[index] === topElement && current > 1) {
      steck.pop();
      current = 0;
    }

  }
  return steck.length === 0
}
