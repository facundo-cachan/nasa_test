import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, ImageBackground} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {AppContext} from './AppProvider';

import HomeScreen from '@screens/home';
import RoversScreen from '@screens/rovers';
import CamerasScreen from '@screens/cameras';
import PhotosScreen from '@screens/photos';

const Stack = createStackNavigator(),
  Tab = createBottomTabNavigator(),
  screenOptions = {
    headerTitle: () => {
      const {styles} = React.useContext(AppContext);
      return (
        <View style={styles.screenTitle}>
          <ImageBackground
            style={styles.headerLogo}
            source={require('@assets/images/logo.png')}
          />
        </View>
      );
    },
    headerBackTitleVisible: false,
    headerLeft: () => null,
  },
  RoversStackNavigator = () => (
    <Stack.Navigator>
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
  ),
  CamerasStackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Cameras"
        component={CamerasScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="Rovers"
        component={RoversScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="Photos"
        component={PhotosScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  ),
  AppStack = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}: {color: string; size: number}) => (
            <Icon
              type="Ionicons"
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rovers"
        options={{
          tabBarLabel: 'Rovers',
          tabBarIcon: ({color, size}: {color: string; size: number}) => (
            <Icon
              type="Ionicons"
              name="car-outline"
              color={color}
              size={size}
            />
          ),
        }}
        component={RoversStackNavigator}
      />
      <Tab.Screen
        name="Cameras"
        options={{
          tabBarLabel: 'Cameras',
          tabBarIcon: ({color, size}: {color: string; size: number}) => (
            <Icon
              type="Ionicons"
              name="camera-outline"
              color={color}
              size={size}
            />
          ),
        }}
        component={CamerasStackNavigator}
      />
      <Tab.Screen
        name="Photos"
        options={{
          tabBarLabel: 'Photos',
          tabBarIcon: ({color, size}: {color: string; size: number}) => (
            <Icon
              type="Ionicons"
              name="image-outline"
              color={color}
              size={size}
            />
          ),
        }}
        component={PhotosScreen}
      />
    </Tab.Navigator>
  );

export default AppStack;
