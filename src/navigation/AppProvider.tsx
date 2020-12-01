import React from 'react';
import formatDate from '@utils/_formatDate';
import styleLight from '../styles/light';
import styleDark from '../styles/dark';

export const AppContext: React.Context<any> = React.createContext(null);

export const AppProvider = ({children}: any) => {
  const [selectedStyles, setStyle] = React.useState(false),
    [day, setDay] = React.useState(formatDate(Date()));
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
