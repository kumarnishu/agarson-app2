import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { UserContext, UserProvider } from './contexts/UserContext';
import { PrivateStackNavigation, PublicStackNavigation } from './Navigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

function Main() {
  const { user } = React.useContext(UserContext)
  return (
    <SafeAreaProvider>
      {user ? <PrivateStackNavigation /> : <PublicStackNavigation />}
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

function App() {
  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <Main />
      </UserProvider>
    </PaperProvider>
  )
}

export default App;
