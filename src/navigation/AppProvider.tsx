import React from 'react';

import light from '../styles/light';
import dark from '../styles/dark';

export const AppContext: React.Context<any> = React.createContext(null);

export const AppProvider = ({children}: any) => {
  const [selectedStyles, setStyle] = React.useState(true),
    styles = selectedStyles ? light : dark;
  return (
    <AppContext.Provider
      value={{
        styles,
        setStyle,
        selectedStyles,
      }}>
      {children}
    </AppContext.Provider>
  );
};
