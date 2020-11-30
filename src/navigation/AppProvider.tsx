import React from 'react';
import styleLight from '../styles/light';
import styleDark from '../styles/dark';

export const AppContext: React.Context<any> = React.createContext(null);

export const AppProvider = ({children}: any) => {
  const [selectedStyles, setStyle] = React.useState(false);
  return (
    <AppContext.Provider
      value={{
        styles: selectedStyles ? styleLight : styleDark,
        setStyle,
        selectedStyles,
      }}>
      {children}
    </AppContext.Provider>
  );
};
