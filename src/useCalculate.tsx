import { useState } from 'react';

export default function useCalculate() {
  const [operation, setOperation] = useState<string | null>();
  const [result, setResult] = useState<string | null>();

  function handleChangeValue(value: string) {
    if (result) setResult(null);

    setOperation((prev) => {
      if (prev) {
        const lastWord = prev[prev.length - 1];

        const isTheLastIsNumberOrBrackets =
          Number.isInteger(+lastWord) || lastWord === ')';

        const operations = ['/', '-', '+', 'x'];

        if (value === '(') {
          const hasNoCloseBracket = prev.split('').reduce((acc, value) => {
            if (value === '(') return true;

            return false;
          }, false);

          if (!prev || hasNoCloseBracket) return value;

          if (operations.includes(lastWord)) return prev + value;

          return prev;
        }

        if (value === ')') {
          if (Number.isInteger(+lastWord) && prev.includes('(')) {
            return prev + value;
          }

          return prev;
        }

        if (operations.includes(value) && !isTheLastIsNumberOrBrackets)
          return prev;

        return prev + value;
      }

      const notAllowedToStart = ['/', 'x'];

      if (notAllowedToStart.includes(value)) return prev;

      if (value === ')') return;

      return value;
    });
  }

  function handleGoBack() {
    setOperation((prev) => {
      if (prev) {
        const words = prev?.trim().split('');
        words.pop();
        return words.join('');
      }

      return prev;
    });
  }

  function handleClear() {
    setOperation(null);
    setResult(null);
  }

  function calculateResult() {
    const allOperations = operation?.replace(/x/g, '*');
    const calcResult = eval(allOperations || '');
    setOperation(`${calcResult}`);
    setResult(calcResult);
  }

  return {
    result,
    operation,
    handleChangeValue,
    handleGoBack,
    handleClear,
    calculateResult,
  };
}
