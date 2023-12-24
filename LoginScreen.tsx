import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useCallback, useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function LoginScreen() {
  const { setUser } = useContext(UserContext)
  const insets = useSafeAreaInsets()
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
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
      <Text style={{ fontSize: 28, fontFamily: "Inter-Black" }}>Login Page</Text>
      <Button
        mode="contained"
        onPress={() => {
          // @ts-ignore
          setUser({ username: "nishu kumar" })
        }}
      >
        Login
      </Button>
    </View>
  );
}