import React from 'react';
import styleLight from '../styles/light';
import styleDark from '../styles/dark';

export const AppContext: React.Context<any> = React.createContext(null);

export const AppProvider = ({children}: any) => {
  const [selectedStyles, setStyle] = React.useState(false),
    [day, setDay] = React.useState('2004-01-14');
  return (
    <AppContext.Provider
      value={{
        styles: selectedStyles ? styleLight : styleDark,
        day,
        setDay,
        setStyle,
        selectedStyles,
      }}>
      {children}
    </AppContext.Provider>
  );
};
