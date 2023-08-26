
import React from 'react';
import classes from './CalculatorButton.module.css';

// props has the button symbol that we can display i.e. 1, 2, +, %
const CalculatorButton = (props) => {
  return (
    <React.Fragment>
      <button className={classes.btn}>
        {props.buttonSymbol}
      </button>
    </React.Fragment>
  )
}


export default CalculatorButton;
