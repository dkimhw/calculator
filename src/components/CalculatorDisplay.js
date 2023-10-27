
import classes from './CalculatorDisplay.module.css';
import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import { Textfit } from 'react-textfit';

const CalculatorDisplay = () => {
  const { calculation } = useContext(CalculatorContext);
  console.log("calculation.num: ", calculation.num);
  return (
    <div className={ classes['calculator-display'] }>
      <Textfit max={70} mode="single">{ calculation.num ? calculation.num : calculation.res }</Textfit>
    </div>
  )
};

export default CalculatorDisplay;
