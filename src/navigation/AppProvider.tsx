import React from 'react';

import styleLight from '../styles/light';
import styleDark from '../styles/dark';

export const AppContext: React.Context<any> = React.createContext(null);

export const AppProvider = ({children}: any) => {
  const [selectedStyles, setStyle] = React.useState(false),
    api_key = '0ZegDETvWCczEnQHgiWdhhlsehO4i32RQq5z09r9';
  return (
    <AppContext.Provider
      value={{
        styles: selectedStyles ? styleLight : styleDark,
        api_key,
        setStyle,
        selectedStyles,
      }}>
      {children}
    </AppContext.Provider>
  );
};
