import React, { useState } from 'react';
import '../styles/Calculator.css'; // Optional: For styling

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!num1 || !num2) {
      setError('Erorr !');
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setError('Error !');
      return false;
    }
    setError('');
    return true;
  };

  const handleOperation = (operation) => {
    if (!validateInputs()) {
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    switch (operation) {
      case 'add':
        res = number1 + number2;
        break;
      case 'subtract':
        res = number1 - number2;
        break;
      case 'multiply':
        res = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          setError('Cannot divide by zero.');
          return;
        }
        res = number1 / number2;
        break;
      default:
        return;
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="input-container">
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Num 1"
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Num 2"
        />
      </div>
      <div className="button-container">
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>*</button>
        <button onClick={() => handleOperation('divide')}>/</button>
      </div>
      {error && <div className="error">{error}</div>}
      {result !== null && !error && (
        <div className="result">Success !: {result}</div>
      )}
    </div>
  );
};

export default Calculator;
