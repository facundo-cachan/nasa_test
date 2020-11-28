import React from 'react';

import {AppProvider} from './AppProvider';
import Routes from './Routes';

const Navigation = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default Navigation;
