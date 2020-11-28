import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {AppContext} from './AppProvider';

import HomeScreen from '@screens/home';

const Stack = createStackNavigator(),
  Tab = createBottomTabNavigator(),
  StackScreens = () => {
    const {styles} = React.useContext(AppContext),
      screenOptions = {
        headerTitle: () => (
          <View style={styles.screenTitle}>
            <ImageBackground
              source={require('../assets/images/logo.png')}
              style={styles.screenTitleImg}
            />
          </View>
        ),
        headerBackTitleVisible: false,
        headerLeft: () => null,
      };
    return (
      <Stack.Navigator>
        {/*
			<Stack.Screen
				name="Welcome"
				component={WelcomeScreen}
				options={{
					title: '',
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: '#2e64e515',
						shadowColor: '#2e64e515',
						elevation: 0,
					},
					headerBackTitleVisible: false,
					headerBackImage: () => (
						<View style={{ marginLeft: 15 }}>
							<Icon
								type="Ionicons"
								name="arrow-back"
								size={25}
								color="#2e64e5"
							/>
						</View>
					),
				}}
			/>
			*/}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Image
                style={styles.headerLogo}
                source={require('@assets/images/logo.png')}
              />
            ),
          }}
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
        <Tab.Screen
          name="Home"
          component={StackScreens}
          options={{
            tabBarLabel: 'Home',
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
      </Tab.Navigator>
    );
  };

export default AppStack;
