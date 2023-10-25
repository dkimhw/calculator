
import classes from './CalculatorDisplay.module.css';
import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import { Textfit } from 'react-textfit';

const CalculatorDisplay = () => {
  const { calculation } = useContext(CalculatorContext);

  return (
    <div className={ classes['calculator-display'] }>
      <Textfit>{ calculation.num || 0 }</Textfit>
    </div>
  )
};

export default CalculatorDisplay;
