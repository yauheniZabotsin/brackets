module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '[', '{', '|', '1', '3', '5', '7', '8',]
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
    '|': '|',
    '2': '1',
    '4': '3',
    '6': '5',
    '7': '7',
    '8': '8',

  }

  let steck = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    openBrackets.forEach(element => {
      if (currentSymbol === element)
        steck.push(currentSymbol);
    });
    let topElement = steck[steck.length - 1];
    if (brackets[currentSymbol] === topElement) {
      steck.pop();
    }
  }
  return steck.length === 0
}
