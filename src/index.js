import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import screens from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.SelectFavorite.name}>
        <Stack.Screen
          name={screens.SelectFavorite.name}
          component={screens.SelectFavorite.component}
        />
        <Stack.Screen
          name={screens.FavoriteList.name}
          component={screens.FavoriteList.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
