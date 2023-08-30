

// Store the necessary states here
// What needs to managed?
// currentDisplayVal to pass to CalculatorDisplay
// currentTotalVal which will display after user presses "="
// Need to layout the logic flow of the operations

import CalculatorInputsLayout from "./CalculatorInputsLayout"
import classes from "./Calculator.module.css"
// import { useState } from 'react';

// const calculatorSymbols = ['/', '%', 'X', '-', '+'];

const Calculator = () => {
  // const [currSelectedVal, setCurrSelectedVal] = useState(null);

  return (
    <div className={classes['container']}>
      <div className={classes['calculator']}>
        <CalculatorInputsLayout />
      </div>
    </div>

  )
}

export default Calculator;
