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
 import HomeScreen from './screens/home/Home';
 import ScholarshipScreen from './screens/scholarship/Scholarship';

 const Stack = createNativeStackNavigator();

 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Scholarships">
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Scholarships" component={ScholarshipScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };

 export default App;
