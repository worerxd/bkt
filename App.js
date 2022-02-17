/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {FontAwesome} from '@expo/vector-icons';
import {Provider} from 'react-redux';
import store from './store/index';
import HomeScreen from './screens/home/Home';
import ScholarshipScreen from './screens/scholarship/Scholarship';
import DetailScreen from './screens/detail/Detail';
import SignUpScreen from './screens/signUp/SignUp';
import LoginScreen from './screens/login/Login';
import RegisterScreen from './screens/register/Register';

import iconsName from './utils/icons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Landing = () => {
  return (
    <Tab.Navigator
      labeled={false}
      activeColor="white"
      inactiveColor="#54001A"
      barStyle={{backgroundColor: '#8B9191'}}
      options={{
        tabBarShowLabel: false,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const iconName = iconsName(route.name);

          return <FontAwesome name={iconName} size={18} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scholarships" component={ScholarshipScreen} />
      <Tab.Screen name="SignUp" component={SignUpScreen} />
      {/* <Tab.Screen name="Locations" component={LocationsScreen} /> */}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{headerTitle: 'Detalle de Beca'}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
