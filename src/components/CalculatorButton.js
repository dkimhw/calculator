
import React from 'react';
import classes from './CalculatorButton.module.css';
import { useContext, useState } from 'react';
import { CalculatorContext } from "../context/CalculatorContext";


// props has the button symbol that we can display i.e. 1, 2, +, %
const CalculatorButton = (props) => {
  // Load context
  const { calculation, setCalculation } = useContext(CalculatorContext);

  // Component states
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isOpClick, setIsOpClick ] = useState(false);

  // Parse what css style to use
  let additionalCSS = '';
  if (props.additionalCSSType === 'utility') {
    additionalCSS = classes['btn-utility'];
  } else if (props.additionalCSSType === 'numbers') {
    additionalCSS = classes['btn-numbers'];
  } else if (props.additionalCSSType === 'ops') {
    additionalCSS = classes['btn-operations'];
  }


  const dotClick = () => {
    setCalculation({
      ...calculation,
      num: !calculation.num.toString().includes('.') ? calculation.num + '.' : calculation.num
    });
  }

  const resetClick = () => {
    setCalculation({
      sign: '', num: 0, res: 0
    })
  }

  const handleNumClickButton = () => {
    const numberString = props.buttonSymbol.toString();

    let numberValue;
    if (numberString === '0' && calculation.number === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calculation.num + numberString);
    }

    setCalculation({
      ...calculation,
      num: numberValue
    });
  }

  const signClick = () => {
    setCalculation({
      sign: props.buttonSymbol,
      res: !calculation.res && calculation.num ? calculation.num : calculation.res,
      num: 0
    })
  };

  const equalsClick = () => {
    if (calculation.res && calculation.num) {
      const math = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          '÷': (a, b) => a / b,
          'x': (a, b) => a * b,
          '%': (a, b) => a % b,
        }

        return result[sign](a, b);
      };

      setCalculation({
        res: math(Number(calculation.res), Number(calculation.num), calculation.sign),
        sign: '',
        num: 0,
      });
    }
  }

  // const mainCalculatorInputSymbols = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const plusMinusClick = () => {
    if (calculation.num === 0) {
      setCalculation({
        ...calculation,
        num: "-0"
      });
    } else {
      setCalculation({
        ...calculation,
        num: -calculation.num
      });
    }


  }

  const handleBtnClick = (evt) => {
    setIsHighlighted(false);

    const val = evt.target.value;
    const results = {
      '.': dotClick,
      'AC': resetClick,
      '%': signClick,
      '÷': signClick,
      '-': signClick,
      '+': signClick,
      'x': signClick,
      '=': equalsClick,
      '+/-': plusMinusClick,
    }
    const ops = ['%', '÷', '-', 'x', '+']

    // check if an operation btn was clicked
    if (val in ops) {
      setIsHighlighted(true);
    }
    // console.log(calculation.sign);
    // console.log()
    // check if a previous
    console.log(val);
    console.log(ops.includes(calculation.sign))
    if (ops.includes(calculation.sign) && val in ops) {
      console.log("hello");
      return results['=']();
    }

    if (results[val]) {
      return results[val]();
    } else {
      return handleNumClickButton();
    }
  }

  return (
    <React.Fragment>
      <button
        className={
          `${classes.btn} ${additionalCSS} ${props.buttonStyle ? props.buttonStyle : ''} ${isHighlighted ? classes.highlight : ''}`
        }
        value={ props.buttonSymbol }
        onClick={ handleBtnClick }
      >
        {props.buttonSymbol}
      </button>
    </React.Fragment>
  )
}


export default CalculatorButton;
