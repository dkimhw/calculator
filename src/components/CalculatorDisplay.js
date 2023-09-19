
import classes from './CalculatorDisplay.module.css'

const CalculatorDisplay = (props) => {
  return (
    <div className={ classes['calculator-display'] }>
      <h1 className={ classes['calculator-display-value'] }>{ props.currVal || 0}</h1>
    </div>
  )
};

export default CalculatorDisplay;
