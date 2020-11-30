import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, ImageBackground} from 'react-native';
import {AppContext} from './AppProvider';

import HomeScreen from '@screens/home';
import RoversScreen from '@screens/rovers';
import CamerasScreen from '@screens/cameras';
import PhotosScreen from '@screens/photos';

const Stack = createStackNavigator(),
  Tab = createBottomTabNavigator(),
  AppStack = () => {
    const {styles} = React.useContext(AppContext),
      screenOptions = {
        headerTitle: () => (
          <View style={styles.screenTitle}>
            <ImageBackground
              style={styles.headerLogo}
              source={require('@assets/images/logo.png')}
            />
          </View>
        ),
        headerBackTitleVisible: false,
        headerLeft: () => null,
      };
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Rovers"
          component={RoversScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Cameras"
          component={CamerasScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Photos"
          component={PhotosScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    );
  };

export default AppStack;
