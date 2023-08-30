
import React from 'react';
import classes from './CalculatorButton.module.css';

// props has the button symbol that we can display i.e. 1, 2, +, %
const CalculatorButton = (props) => {
  let additionalCSS = '';
  if (props.additionalCSSType === 'utility') {
    additionalCSS = classes['btn-utility'];
  } else if (props.additionalCSSType === 'numbers') {
    additionalCSS = classes['btn-numbers'];
  } else if (props.additionalCSSType === 'ops') {
    additionalCSS = classes['btn-operations'];
  }

  console.log(props);
  return (
    <React.Fragment>
      <button className={`${classes.btn} ${additionalCSS} ${props.buttonStyle ? props.buttonStyle : ''}`}>
        {props.buttonSymbol}
      </button>
    </React.Fragment>
  )
}


export default CalculatorButton;
