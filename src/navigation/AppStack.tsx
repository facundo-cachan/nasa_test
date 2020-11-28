import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, ImageBackground} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {AppContext} from './AppProvider';

import HomeScreen from '@screens/home';

const Rovers = ['Curiosity', 'Opportunity', 'Spirit'];

const Stack = createStackNavigator(),
  Tab = createBottomTabNavigator(),
  StackScreens = ({route: {name}}: any) => {
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
          name={name}
          component={HomeScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    );
  },
  AppStack = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#2e64e5',
        }}>
        {Rovers.map((rover: string, k: any) => (
          <Tab.Screen
            key={k}
            name={rover}
            component={StackScreens}
            options={{
              tabBarLabel: rover,
              tabBarIcon: ({color, size}: {color: string; size: number}) => (
                <Icon
                  type="MaterialCommunityIcons"
                  name="home-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    );
  };

export default AppStack;
