import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/appNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* Contenedor principal con el ID agregado */}
      <div id="app">
        <AppNavigator />
      </div>
    </NavigationContainer>
  );
};

export default App;
