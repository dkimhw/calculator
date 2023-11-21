import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [calculation, setCalculation] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const providerValue = {
    calculation, setCalculation
  }

  return (
    <CalculatorContext.Provider value={providerValue}>
      {children}
    </CalculatorContext.Provider>
  )
}
