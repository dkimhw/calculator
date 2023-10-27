

// Store the necessary states here
// What needs to managed?
// currentDisplayVal to pass to CalculatorDisplay
// currentTotalVal which will display after user presses "="
// Need to layout the logic flow of the operations

import CalculatorInputsLayout from "./CalculatorInputsLayout"
import CalculatorDisplay from "./CalculatorDisplay"
import classes from "./Calculator.module.css"

const Calculator = () => {
  return (
    <div className={classes['container']}>
      <div className={classes['calculator']}>
        <CalculatorDisplay/>
        <CalculatorInputsLayout/>
      </div>
    </div>

  )
}

export default Calculator;
