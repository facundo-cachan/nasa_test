import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

const Routes = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);

export default Routes;
