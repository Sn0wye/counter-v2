import { createContext, ReactNode, useState } from "react";

export const InputContext = createContext<InputContextData>({} as InputContextData);

interface InputContextData {
  inputValue: any;
  setInputValue: any;
}
interface ContextInputProps {
  children: ReactNode;
}

export const ContextInput = ({ children }: ContextInputProps) => {

  const [inputValue, setInputValue] = useState(false);

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  )
}
