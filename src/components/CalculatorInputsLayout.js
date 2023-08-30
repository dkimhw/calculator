
import CalculatorButton from "./CalculatorButton";
import React from 'react';
import classes from './CalculatorInputsLayout.module.css';


const mainCalculatorInputSymbols = ['AC', '+/-', '%', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
const mainOperatorSymbols = ['÷', 'x', '-', '+', '='];

const CalculatorInputsLayout = (props) => {
  const styleZero = classes['span-two'];

  return (
    <React.Fragment>
      <div className={ classes['inputs-container'] }>
        <div className={ classes['numbers-container'] }>
          {
            mainCalculatorInputSymbols.map((number, index) => {
              if (index >= 0 && index <= 2) {
                return <CalculatorButton buttonSymbol={number} additionalCSSType='utility' key={index}/>
              }
              else if (number === 0) {
                return <CalculatorButton buttonSymbol={number} additionalCSSType='numbers' buttonStyle={styleZero} key={index}/>
              } else {
                return <CalculatorButton buttonSymbol={number} additionalCSSType='numbers' key={index}/>
              }
            })
          }
        </div>
        <div className={ classes['symbols-container'] }>
          {
            mainOperatorSymbols.map((number, index) => {
              return <CalculatorButton buttonSymbol={number} additionalCSSType='ops' key={index}/>
            })
          }
        </div>
      </div>
    </React.Fragment>
  )
};

export default CalculatorInputsLayout;
