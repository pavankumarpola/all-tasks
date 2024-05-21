import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const handleOperandChange = (e, operand) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      if (operand === 1) {
        setOperand1(value);
      } else {
        setOperand2(value);
      }
    }
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculateResult = () => {
    let num1 = parseFloat(operand1);
    let num2 = parseFloat(operand2);

    let res = 0;

    switch (operator) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        break;
      default:
        break;
    }

    setResult(res);
  };

  return (
    <div className="calculator">
        <h1>Calculator</h1>
      <input
        type="text"
        value={operand1}
        onChange={(e) => handleOperandChange(e, 1)}
        placeholder="Enter operand 1"
      />
        <input
        type="text"
        value={operand2}
        onChange={(e) => handleOperandChange(e, 2)}
        placeholder="Enter operand 2"
      />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="+">Add</option>
        <option value="-">Sub</option>
        <option value="*">Mul</option>
        <option value="/">Div</option>
      </select>
     
      <button onClick={calculateResult}>=</button>
      <input type="text" value={result} readOnly />
    </div>
  );
};

export default Calculator;
