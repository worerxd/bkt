/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialIcons, FontAwesome} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';

import {Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from './screens/home/Home';
import ScholarshipScreen from './screens/scholarship/Scholarship';
import DetailScreen from './screens/detail/Detail';
import SignUpScreen from './screens/signUp/SignUp';
import LoginScreen from './screens/login/Login';
import RegisterScreen from './screens/register/Register';

import iconsName from './utils/icons';
import PendingScreen from './screens/pending/Pending';
import {getUserFromAsyncStorage, removeUserFromLogout} from './store/actions';

import styles from './App.styles';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Landing = () => {
  const user = useSelector(state => state.user);
  return (
    <Tab.Navigator
      activeColor="white"
      inactiveColor="#BEA6A0"
      barStyle={{backgroundColor: '#800000'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const iconName = iconsName(route.name);

          return <FontAwesome name={iconName} size={18} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
        }}
      />
      <Tab.Screen
        name="Scholarships"
        component={ScholarshipScreen}
        options={{tabBarLabel: 'Becas'}}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{tabBarLabel: 'Formulario'}}
      />
      {user?.role === 'admin' && (
        <Tab.Screen
          name="Pending"
          component={PendingScreen}
          options={{tabBarLabel: 'Pendientes'}}
        />
      )}
    </Tab.Navigator>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const navigator = useNavigation();
  useEffect(() => {
    dispatch(getUserFromAsyncStorage());
  }, []);

  const handleLogout = () => {
    dispatch(removeUserFromLogout());
    navigator.navigate('BKT');
  };

  const handleLogin = () => {
    navigator.navigate('Login');
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BKT"
        component={Landing}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
          headerRight: () =>
            user ? (
              <TouchableOpacity onPress={handleLogout}>
                <View style={styles.accessButton}>
                  <Text style={styles.accessText}>Out</Text>
                  <MaterialIcons.Button
                    name="logout"
                    size={24}
                    color="black"
                    backgroundColor="#d0d8db"
                    onPress={handleLogout}
                    style={{paddingVertical: 5, paddingRight: 0}}
                  />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleLogin}>
                <View style={styles.accessButton}>
                  <Text style={styles.accessText}>In</Text>
                  <MaterialIcons.Button
                    name="login"
                    size={24}
                    color="black"
                    backgroundColor="#d0d8db"
                    onPress={handleLogin}
                    style={{paddingVertical: 5, paddingRight: 0}}
                  />
                </View>
              </TouchableOpacity>
            ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerTitle: 'Detalle de Beca',
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
        }}
      />
      {!user && (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      )}

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
