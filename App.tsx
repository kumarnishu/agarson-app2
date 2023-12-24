import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { UserContext, UserProvider } from './contexts/UserContext';
import { PrivateStackNavigation, PublicStackNavigation } from './Navigation';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { ChoiceProvider } from './contexts/ModalContext';
import { QueryClientProvider, QueryClient } from "react-query";
import NavBar from './components/NavBar';

function Main() {
  const { user } = React.useContext(UserContext)
  const insets = useSafeAreaInsets()
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }}
      onLayout={onLayoutRootView}
    >

      {user ?
        <>
          <NavBar />
          <PrivateStackNavigation />
        </> :
        <PublicStackNavigation />
      }
      <StatusBar style="auto" />
    </View>
  );
}
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: true,
      refetchOnMount: true,
      retry: false,
      staleTime: 200
    }
  }
});
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <ChoiceProvider>
            <UserProvider>
              <Main />
            </UserProvider>
          </ChoiceProvider>
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}

export default App;
