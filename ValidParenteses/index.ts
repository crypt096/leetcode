function isValid(s: string): boolean {
  const stack = []
  const brackets = {'(':')', '[':']','{':'}'}

  for (let i = 0; i < s.length; i++) {
      const currentBracket = s[i];

      if (brackets[currentBracket]) {
          stack.push(currentBracket)

      } else {
          const lastOpenBracket = stack[stack.length - 1];
          if (brackets[lastOpenBracket] != currentBracket) {
              return false;
          }
          stack.pop();
      }
  }
  return stack.length === 0;
};