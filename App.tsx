import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { UserContext, UserProvider } from './contexts/UserContext';
import { PrivateStackNavigation, PublicStackNavigation } from './Navigation';


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
    <UserProvider>
      <Main />
    </UserProvider>
  )
}

export default App;
