import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    // console.log('Clicked:', value);
    // console.log('Expression:', expression);
    // console.log('Expression trimmed:', expression.trim());
    
    if (value === '=') {
      if (expression.trim() === '') {
        // console.log('Expression is empty');
        setResult('Error');
      } else {
        try {
          const evalResult = eval(expression);
          console.log('Result:', evalResult);
          setResult(evalResult);
        } catch (error) {
          setResult('Error');
        }
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression(prevExpression => prevExpression + value);
      setResult('');
    }
  };

  return (
    <div className="calculator">
        <h2>React Calculator</h2>
      <input type="text" value={expression} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
