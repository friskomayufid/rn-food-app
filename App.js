import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ResultList" 
          options={{ title: 'Bussiness Search' }}
          component={SearchScreen} 
        />
        <Stack.Screen 
          name="ResultShow" 
          options={{ title: 'Bussiness Detail' }}
          component={ResultShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
