import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Home';
import { DetailsScreen } from './Details';
import { StatusBar } from 'expo-status-bar';


export type RootStackParamList = {
  Home: undefined;
  Details: {
    id: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
          <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ id: "1" }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}

export default App;
