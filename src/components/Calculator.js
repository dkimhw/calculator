

/*

3. User should be able to select "+", "+", "+" --> save the result - does not necessarily need to have selected "="

*/

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
