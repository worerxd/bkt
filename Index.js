import {NavigationContainer} from '@react-navigation/native';
import {registerRootComponent} from 'expo';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import store from './store/index';

const Index = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

registerRootComponent(Index);
export default Index;
