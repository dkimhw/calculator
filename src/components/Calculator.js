

// Store the necessary states here
// What needs to managed?
// currentDisplayVal to pass to CalculatorDisplay
// currentTotalVal which will display after user presses "="
// Need to layout the logic flow of the operations

import CalculatorInputsLayout from "./CalculatorInputsLayout"
import CalculatorDisplay from "./CalculatorDisplay"
import classes from "./Calculator.module.css"
import { useState, useContext } from 'react';
import { CalculatorContext } from "../context/CalculatorContext";

// https://www.youtube.com/watch?v=o89bhL-S6g8&ab_channel=CandDev
const Calculator = () => {
  // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const operators = ['%', '÷', 'x', '-', '+', '='];
  const { calculation, setCalculation } = useContext(CalculatorContext);

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
