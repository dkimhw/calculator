
import CalculatorButton from "./CalculatorButton";
import React from 'react';
import classes from './CalculatorInputsLayout.module.css';


const mainCalculatorInputSymbols = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
// const mainOperatorSymbols = ['÷', 'x', '-', '+', '='];

const CalculatorInputsLayout = (props) => {

  return (
    <React.Fragment>
      <div className={ classes['inputs-container'] }>
        {
          mainCalculatorInputSymbols.map((symbol, index) => {
            if (index >= 0 && index <= 2) {
              return <div className={ classes['grid-item'] }><CalculatorButton buttonSymbol={symbol} additionalCSSType='utility' key={index} btnOnClick= { props.btnOnClick }/></div>
            } else if (symbol === 0) {
              return <div className={ classes['grid-item-span-two'] }><CalculatorButton buttonSymbol={symbol} additionalCSSType='numbers' key={index} btnOnClick= { props.btnOnClick }/></div>
            } else if (['÷', 'x', '-', '+', '='].includes(symbol)) {
              return <div className={ classes['grid-item'] }><CalculatorButton buttonSymbol={symbol} additionalCSSType='ops' key={index} btnOnClick= { props.btnOnClick }/></div>
            } else {
              return <div className={ classes['grid-item'] }><CalculatorButton buttonSymbol={symbol} additionalCSSType='numbers' key={index} btnOnClick= { props.btnOnClick }/></div>
            }
          })
        }
        {/* <div className={ classes['numbers-container'] }>
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
        </div> */}
        {/* <div className={ classes['symbols-container'] }>
          {
            mainOperatorSymbols.map((number, index) => {
              return <CalculatorButton buttonSymbol={number} additionalCSSType='ops' key={index}/>
            })
          }
        </div> */}
      </div>
    </React.Fragment>
  )
};

export default CalculatorInputsLayout;
