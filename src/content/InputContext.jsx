import { createContext, ReactNode, useState } from 'react';

export const InputContext = createContext({});

export const ContextInput = ({ children }) => {
  const [inputValue, setInputValue] = useState(false);

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};
