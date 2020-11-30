import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {AppContext} from '@navigation/AppProvider';
import HomeScreen from '@screens/home';
import RoverScreen from '@screens/rover';
import PhotosScreen from '@screens/photos';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const {styles} = React.useContext(AppContext),
    headerScreen = {
      headerLeft: () => null,
      headerStyle: styles.headerStyle,
      headerTintColor: styles.headerTintColor,
      headerTitleStyle: styles.headerTitleStyle,
    };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}>
      <Drawer.Screen
        name="Home"
        options={{drawerLabel: 'Home'}}
        component={() => (
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              /* initialParams={} */
              options={{
                title: 'Home',
                ...headerScreen,
              }}
            />
          </Stack.Navigator>
        )}></Drawer.Screen>
      <Drawer.Screen
        name="Rover"
        options={{drawerLabel: 'Rover'}}
        component={({route}: any) => (
          <Stack.Navigator initialRouteName="Rover">
            <Stack.Screen
              name="Home"
              component={RoverScreen}
              /* initialParams={} */
              options={{
                title: 'Mars Rover 2020',
                ...headerScreen,
              }}
            />
            <Stack.Screen
              name="Photos"
              component={PhotosScreen}
              /* initialParams={} */
              options={{
                title: 'Photos' || route.params.name,
                ...headerScreen,
              }}
            />
          </Stack.Navigator>
        )}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
