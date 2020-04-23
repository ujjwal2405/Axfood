import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/Components/Home'
import Datalist from './src/Components/Datalist'
import Search from './src/Components/Search'
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/Services/rootreducer';
import Concept from './src/Components/Concept';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Concept" component={Concept} />
      <Stack.Screen options={{headerShown: false}} name="Datalist" component={Datalist} />
      <Stack.Screen options={{headerShown: false}} name="Search" component={Search} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store= {store}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </Provider>
  );
};

export default App;