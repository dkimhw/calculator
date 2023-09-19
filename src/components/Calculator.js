

// Store the necessary states here
// What needs to managed?
// currentDisplayVal to pass to CalculatorDisplay
// currentTotalVal which will display after user presses "="
// Need to layout the logic flow of the operations

import CalculatorInputsLayout from "./CalculatorInputsLayout"
import CalculatorDisplay from "./CalculatorDisplay"
import classes from "./Calculator.module.css"
import { useState } from 'react';

const Calculator = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ['%', '÷', 'x', '-', '+', '='];
  const [currVal, setCurrVal] = useState(0);
  // const [currTotalVal, setCurrTotalVal] = useState(0);

  const btnOnClick = (evt) => {
    // setCurrVal(evt.curr.value)
    console.log(evt.target.value)

    // depending on the button symbol - do something right?

    // 1. If number - setCurrVal(evt.target.value)
    // 2. If operation - keep currVal - highlight the operator on btn - save currVal to currTotalVal
    // 3. If continuing from an operation - setCurrVal - dehighlight the oeprator on btn
    // 4. If submit or operation is clicked - do that operation and save to currTotalVal - display currTotalVal
  }

  return (
    <div className={classes['container']}>
      <div className={classes['calculator']}>
        <CalculatorDisplay currVal={currVal}/>
        <CalculatorInputsLayout
          btnOnClick = { btnOnClick }
        />
      </div>
    </div>

  )
}

export default Calculator;
