import React from 'react';

import styleLight from '../styles/light';
import styleDark from '../styles/dark';

export const AppContext: React.Context<any> = React.createContext(null);

export const AppProvider = ({children}: any) => {
  const [selectedStyles, setStyle] = React.useState(false),
    url =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
  return (
    <AppContext.Provider
      value={{
        styles: selectedStyles ? styleLight : styleDark,
        url,
        setStyle,
        selectedStyles,
      }}>
      {children}
    </AppContext.Provider>
  );
};
