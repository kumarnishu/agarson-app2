import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import VisitScreen from './screens/VisitScreen';


export type PrivateParamList = {
    Home: undefined,
    Visit:undefined
}

export type PublicParamList = {
    Login: undefined
}

const PrivateStack = createNativeStackNavigator<PrivateParamList>();
const PublicStack = createNativeStackNavigator<PublicParamList>();


export function PrivateStackNavigation() {
    return (
        <NavigationContainer >
            <PrivateStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <PrivateStack.Screen name="Home" component={HomeScreen}  />
                <PrivateStack.Screen name="Visit" component={VisitScreen}  />
            </PrivateStack.Navigator>
        </NavigationContainer>
    )
}


export function PublicStackNavigation() {
    return (
        <NavigationContainer >
            <PublicStack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <PublicStack.Screen name="Login" component={LoginScreen} />
            </PublicStack.Navigator>
        </NavigationContainer>
    )
}
