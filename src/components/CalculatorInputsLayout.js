
import CalculatorButton from "./CalculatorButton";
import React from 'react';
import classes from './CalculatorInputsLayour.module.css';


const calculatorNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];

const CalculatorInputsLayout = (props) => {
  return (
    <React.Fragment>
      <div className={ classes['numbers-container'] }>
        {
          calculatorNumbers.map(number => {
            return <CalculatorButton buttonSymbol={number} />
          })
        }
      </div>
    </React.Fragment>
  )
};

export default CalculatorInputsLayout;
